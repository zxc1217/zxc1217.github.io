---
title: "手写一个最小可用的神经网络"
date: 2026-03-30
note: "不用任何框架，只用 NumPy。过程比想象中好玩。"
tag: "动手"
mood: "周日，下雨"
readTime: 12
---

我决定做一件事：从零开始，不用 PyTorch 不用 TensorFlow，只用 NumPy 写一个能识别手写数字的神经网络。

听起来像重复造轮子。但我发现，*当你自己动手造一遍，你对轮子的理解完全不一样*。

## 为什么要这么做

读了三个月的书，我能背出反向传播的公式，能讲清楚链式法则，甚至能画出梯度下降的几何图。但有一次面试，别人让我解释一下"权重更新的时候 learning rate 如果太大会怎样"，我突然卡住了。

我知道标准答案——"会震荡甚至发散"。但我不知道它**为什么**会震荡。因为我从来没真的看过它震荡。

这件事让我意识到一个问题：**我学的所有东西都是别人的理解**，没有一个是我自己的。

## 最小可用的定义

我给自己定了一个很低的目标：

- 识别 MNIST 手写数字（0-9）
- 准确率不用高，能到 90% 就行
- 代码不用优雅，能跑就行
- 不看教程抄代码——每一行都要自己想出来

## 搭好骨架

先写最傻的三层网络：输入层 784 个神经元（28×28 的图），隐藏层 64 个，输出层 10 个。

```python
import numpy as np

class MiniNet:
    def __init__(self):
        # 权重用小的随机值，否则会梯度爆炸
        self.W1 = np.random.randn(784, 64) * 0.01
        self.b1 = np.zeros(64)
        self.W2 = np.random.randn(64, 10) * 0.01
        self.b2 = np.zeros(10)

    def forward(self, x):
        self.z1 = x @ self.W1 + self.b1
        self.a1 = np.maximum(0, self.z1)  # ReLU
        self.z2 = self.a1 @ self.W2 + self.b2
        return softmax(self.z2)
```

写到 `softmax` 那一行，我就卡住了。softmax 怎么写？教科书上的公式我记得：`e^x / sum(e^x)`。直接写：

```python
def softmax(x):
    return np.exp(x) / np.sum(np.exp(x))
```

跑了一下，崩了。`exp(x)` 当 x 很大时会溢出。百度了一下才知道要减最大值：

```python
def softmax(x):
    x = x - np.max(x, axis=-1, keepdims=True)  # 数值稳定
    return np.exp(x) / np.sum(np.exp(x), axis=-1, keepdims=True)
```

这就是第一个顿悟——**教科书里省略的所有细节，都是真实世界里会崩溃的点**。

## 反向传播是最难的

前向没那么难，难的是反向。我画了一张图，手写了三页纸的求导，才把反向传播算对：

```python
def backward(self, x, y, output):
    m = x.shape[0]
    # 输出层的误差就是 softmax 输出 - one-hot 标签
    dz2 = output - y
    dW2 = self.a1.T @ dz2 / m
    db2 = np.sum(dz2, axis=0) / m
    # 往前传
    da1 = dz2 @ self.W2.T
    dz1 = da1 * (self.z1 > 0)  # ReLU 导数
    dW1 = x.T @ dz1 / m
    db1 = np.sum(dz1, axis=0) / m
    return dW1, db1, dW2, db2
```

`dz2 = output - y` 这一行最神奇。数学上它是 softmax + cross-entropy 求导之后简化的结果，但看起来朴素得不可思议。我盯着看了很久。

## 训练的时候才是最痛苦的

跑起来。loss 不降。

查了半天发现 learning rate 设成 1.0 了。改成 0.01，loss 开始降。

跑了一轮，准确率 20%——比随机猜（10%）好一点，但离目标差很远。

把 epoch 调大，改 batch size，调 learning rate……准确率在 80% 左右不再动了。

最后发现一个 bug：我的 `softmax` 梯度计算和 cross-entropy loss 不匹配，因为我用了两套不一致的公式。改掉之后准确率直接上到 92%。

## 这件事教我的

写到这里，凌晨一点了。我关上电脑想了很久。

这个过程让我明白：**AI 不是魔法，它是一堆矩阵相乘加一点非线性**。魔法发生在数据里，发生在训练的动态里，但不在某个神秘的公式里。

下次再有人问我"learning rate 太大会怎样"，我想我能说出一个不一样的答案了。我看过它震荡。我知道它是什么样。
