---
title: '机器学习中一些关键性的概念'
description: '机器学习中一些关键性的概念'
name: ''
category: 'ML'
tags: ['machine learning','key words']
date: '2024/12/13 11:54:10'
commentNumber: 33
---

# 一些关键概念

## 1. 特征数

> 特征数（Feature Count）是指数据集中每个样本包含的属性或维度的数量。在机器学习中，特征是用来描述样本的属性，是模型进行学习和预测的基础。特征数通常等于输入数据矩阵的列数。

### 1.1 举例说明：

- 单个特征：
  比如数据：x = [[1.0], [2.0], [3.0]]`
  这里每个样本（每行）只有一个特征，例如，一个人的身高。 特征数为 1。
- 多个特征：
  比如数据：x = [[1.0, 50.0], [2.0, 60.0], [3.0, 70.0]]
  这里每个样本有两个特征，例如，第一个特征是身高，第二个特征是体重。 特征数为 2。
- 高维特征：
  比如图像处理任务中，一张灰度图片大小为 28x28 像素，则每个像素点是一个特征，特征数为 784（28×28）。如果是彩色图片，特征数会更高（通常为像素数×颜色通道数）。

### 1.2 为什么特征数重要？

1. 与模型结构相关：
   •    模型的输入层大小通常由特征数决定。例如，torch.nn.Linear(input_features, output_features) 中的 input_features 就是特征数。
2. 影响训练难度：
   •    低特征数：容易训练，但可能无法捕捉数据的复杂性。
   •    高特征数：需要更多数据和计算资源，否则可能会过拟合或训练失败。
3. 与数据表示有关：
   •    特征数反映了数据的描述能力，特征选择与工程会显著影响模型性能。

## 2.损失函数（Loss Function）

> 损失函数（Loss Function）是机器学习和深度学习中用来衡量模型预测结果与真实值之间差距的函数。它定义了一个优化目标，模型通过最小化损失函数来提高预测的准确性。

### 2.2 损失函数的作用

1.评估模型性能：
•损失函数的输出是一个标量，表示当前模型的预测有多好或多差。
•损失值越小，说明模型的预测越接近真实值。
2.优化方向：
•通过计算损失函数对模型参数的梯度，指导模型的参数（如权重和偏置）在训练过程中不断优化。

### 2.3 损失函数的种类

**根据任务类型和数据特性有所不同，有以下是常见的损失函数：**

#### 2.3.1. 回归任务：用于预测连续值（如房价、温度）的模型。

常见损失函数：
1.均方误差（Mean Squared Error, MSE）：
        $L = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
        • $y_i$ ：真实值
        • $\hat{y}_i$ ：模型预测值
特点：对误差平方，放大了大误差的影响。

2.平均绝对误差（Mean Absolute Error, MAE）：
        $L = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$
        特点：对异常值（Outliers）更鲁棒，但对小误差不敏感。

#### 2.3.2. 分类任务：用于预测离散标签（如猫/狗分类）的模型。

常见损失函数：
1.交叉熵损失（Cross Entropy Loss）：
$L = -\frac{1}{n} \sum_{i=1}^{n} \sum_{c=1}^{C} y_{i,c} \log(\hat{y}_{i,c})$
• $y_{i,c}$ ：第 i 个样本属于类别 c 的真实标签（1 或 0）
• $\hat{y}_{i,c}$ ：模型预测的第 i 个样本属于类别 c 的概率

#### 2.3.3. 其他任务：如生成任务、排名任务等，可使用定制损失函数。

### 2.4 损失函数与优化器的关系：

损失函数定义了模型的优化目标，而优化器（如 SGD、Adam）负责基于损失函数的梯度调整模型参数，从而使损失值逐步下降。

### 2.5 在 simple_model_training_demo中使用了 均方误差（MSE） 作为损失函数。

•    reduction='sum' 表示计算所有样本的误差平方和 $（\sum(y_i - \hat{y}_i)^2）$。
•    作用是衡量模型的预测值 y_pred 和真实值 y_data 的差距。

### 2.6 损失函数的优化过程：

1. 前向传播：计算预测值 $\hat{y}$ 。
2. 计算损失：通过损失函数比较  $\hat{y}$  和真实值  y 。
3. 反向传播：利用损失函数对模型参数的梯度信息更新权重和偏置，从而改进模型性能。

## 3. 优化器（Optimizer）

> 优化器（Optimizer）是机器学习和深度学习中用来调整模型参数（例如权重和偏置）的算法，其目标是通过最小化损失函数，使模型的预测尽可能接近真实值。
> 优化器通过反向传播计算出的梯度来更新模型参数，从而逐步减小损失函数的值。这一过程通常称为“优化”或“训练”。

### 3.1 优化器的作用

1. 更新参数：根据损失函数的梯度信息，对模型的参数（如权重和偏置）进行更新。
2. 控制学习过程：通过调整步长（学习率），确保模型收敛到最佳解（即最小损失）。
3. 避免局部最优解：在高维空间中，优化器还可以帮助模型跳出局部最优解，找到全局最优解。

### 3.2 优化器的工作原理

**优化器的工作原理是基于梯度下降法，通过不断调整模型的参数（如权重和偏置）来最小化损失函数的值。下面我用更简单的方式分步骤解释这个过程：**

#### 3.2.1. 什么是梯度？

• 梯度可以理解为一个指向“损失函数下降最快方向”的向量。
• 损失函数的值**L**是模型预测与真实值之间差距的度量，模型的参数（比如权重  w  和偏置  b ）会影响**L**的值。
• 梯度告诉我们，当调整参数时，损失函数的值会如何变化
举例：
假设  $L(w) = w^2$ ，即损失函数的形状是一个“碗”，当  w = 0  时，损失最小。

• 如果当前  w = 2 ，梯度  $ \nabla_w L = 2w = 4$ ，表示损失在  w = 2  时增加了。梯度指引我们把  w  减小。
• 如果当前  w = -1 ，梯度  $\nabla_w L = 2w = -2$ ，表示损失在  w = -1  时下降了。梯度指引我们把  w  增加。

#### 3.2.2. 梯度下降法

**1 梯度下降法的原理**
梯度下降法通过以下公式调整参数，来逐步减少损失函数的值：
$\theta_{t+1} = \theta_t - \eta \cdot \nabla_{\theta_t} L$
• $\theta_t$ ：当前的参数值（比如权重和偏置）。
• $\nabla_{\theta_t} L$ ：当前参数对损失函数的梯度。
• $\eta$ ：学习率，表示每次更新的步长。
这个公式的核心思想是：沿着梯度下降的方向（负梯度方向）调整参数，从而让损失函数更接近最小值。
**2. 梯度下降的形象比喻**
可以把损失函数看成是一座山，模型参数是你在山上的位置，你的目标是找到山底（损失最小值）。
1.梯度告诉你当前脚下地势的倾斜方向（往哪个方向下降最快）。
2.优化器就是向导，它根据梯度指导你每一步该怎么走（调整参数）。
3.**学习率（步长）** 决定每一步走多远。步子太大，可能会错过山底，甚至翻到另一侧。步子太小，走得慢，耗时长。
通过不断地走，你最终会到达山底，找到参数的最佳值。

#### 3.2.3. 优化器的工作步骤，优化器的任务就是自动执行以下步骤：

(1) 前向传播
通过模型的当前参数计算预测值  $\hat{y}$ ，然后根据预测值和真实值计算损失**L** 。
损失**L**是优化器的优化目标。
(2) 反向传播
计算损失**L**对模型参数的梯度$（ \nabla L ）$（这个过程是由自动微分完成的（在 PyTorch 中是 loss.backward())）
(3) 参数更新
根据梯度下降公式调整模型参数：
$\theta_{t+1} = \theta_t - \eta \cdot \nabla_{\theta_t} L$
• $\theta_t$ ：当前参数（例如权重、偏置）。
• $\nabla_{\theta_t} L$ ：损失函数  L  对参数  \theta_t  的梯度。
• $\eta$ ：学习率（learning rate），控制每次更新的步长。
• $\theta_{t+1}$ ：更新后的参数。
例如权重和偏置的更新：
$w_{t+1} = w_t - \eta \cdot \nabla_w L$
$b_{t+1} = b_t - \eta \cdot \nabla_b L$
这一步由优化器（如 SGD、Adam）完成，自动应用更新。
(4) 循环重复
重复以上步骤，直到损失函数收敛到一个较小的值或达到训练的最大轮数。

### 3.3 常见的优化器

#### 3.3.1. 随机梯度下降（SGD）

原理：每次仅基于一个小批量数据（mini-batch）的梯度更新参数。
优点：简单高效。
缺点：可能收敛速度慢，并容易陷入局部最优解。
PyTorch 示例：
```python optimizer = torch.optim.SGD(model.parameters(), lr=0.01) ```

#### 3.3.2. 动量优化（Momentum）

原理：在梯度下降中加入“动量”，保留之前的更新方向，以更快地收敛。
公式：
$v_{t+1} = \beta v_t - \eta \nabla_{\theta_t} L$
$\theta_{t+1} = \theta_t + v_{t+1}$
优点：加速收敛，减少振荡。

#### 3.3.3. Adam（自适应矩估计）

原理：结合动量优化和自适应学习率调整。
特点：对不同参数动态调整学习率，适合处理稀疏梯度。
公式：
$m_t = \beta_1 m_{t-1} + (1-\beta_1) \nabla_{\theta_t} L$
$v_t = \beta_2 v_{t-1} + (1-\beta_2) (\nabla_{\theta_t} L)^2$
m_t：一阶动量。
v_t：二阶动量。
PyTorch 示例：

```python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001) 
```

#### 3.3.4. RMSprop

原理：通过平方梯度的移动平均调整学习率。
优点：适合处理非平稳目标函数。
PyTorch 示例：

```python
optimizer = torch.optim.RMSprop(model.parameters(), lr=0.01) 
```

### 3.4 优化器中的学习率

• 学习率 ( $\eta$ ) 决定了每次参数更新的步长
• 学习率过大：可能会错过最优解，甚至导致发散。
• 学习率过小：收敛速度慢，训练时间过长。
• 通常可以使用 学习率调度器 动态调整学习率。

### 3.5 优化器在simple_model_training_demo代码中的体现

```python
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
for epoch in range(100):
        y_pred = model(x_data)         # 前向传播，计算预测值
     loss = criterion(y_pred, y_data) # 计算损失
     optimizer.zero_grad()          # 清空上一次的梯度
     loss.backward()                # 反向传播，计算梯度
     optimizer.step()               # 更新参数
```

1. 使用了 随机梯度下降（SGD） 作为优化器。
2. model.parameters()：将模型的所有参数（权重和偏置）传递给优化器，以便更新。
3. lr=0.01：学习率为 0.01，控制每次参数更新的步长。
4. optimizer.zero_grad()：清空上一步的梯度，避免梯度叠加。
5. loss.backward()：计算损失函数对模型参数的梯度（ $\nabla_{\theta_t} L$ ）。
6. optimizer.step()：根据梯度下降公式更新参数：$\theta_{t+1} = \theta_t - \eta \cdot \nabla_{\theta_t} L$

### 3.6总结

1. 优化器在训练中的核心作用是：
   • 基于梯度信息更新模型参数。
   • 帮助模型最小化损失函数，从而提高预测性能。
2. 优化器的本质：通过梯度信息不断调整参数，减少损失函数的值。
3. 常用优化器（如 SGD、Adam）提供了多种策略来让训练更快、更稳定，甚至帮助跳出局部最优解。

## 4. 监督学习 (Supervised Learning)

### 4.1 定义

监督学习是指模型在带有标注数据的监督下进行学习，模型通过学习输入（特征）和输出（标签）之间的映射关系，能够对新数据进行预测。

### 4.2 关键特点

1. 输入和输出：数据包含特征（输入）和标签（输出）。
2. 目标：最小化模型预测值与真实标签之间的误差（如均方误差、交叉熵等）。
3. 适用场景：任务目标清晰，数据标注充分。

### 4.3 常见算法

##### 1. 分类

* 逻辑回归
* 决策树 / 随机森林
* 支持向量机（SVM）
* 神经网络（如卷积神经网络 CNN）

##### 2. 回归

* 线性回归
* 岭回归
* Lasso 回归

### 4.4 应用场景

1. 邮件分类（垃圾邮件 vs 正常邮件）
2. 图像分类（识别猫狗图片）
3. 销售预测（预测房价、销量）

## 5. 无监督学习 (Unsupervised Learning)

### 5.1 定义

无监督学习用于无标注数据，模型通过学习输入数据的分布特征来揭示数据中的隐藏模式或结构。

### 5.2 关键特点

1. 无标签：数据只有特征，没有对应的标签。
2. 目标：发现数据的隐藏模式，例如分组、降维。
3. 适用场景：数据未标注，或目标未知但需要探索数据结构。

### 5.3 常见算法

##### 1. 聚类

* K 均值（K-means）
* 层次聚类
* DBSCAN

##### 2. 降维

* 主成分分析（PCA）
* t-SNE
* UMAP

### 5.4 应用场景

1. 客户分群（根据消费习惯分类）
2. 推荐系统（基于用户行为相似性）
3. 图像降噪（通过 PCA 去除噪声）

## 6. 强化学习 (Reinforcement Learning)

### 6.1 定义

强化学习是一个基于试错机制的学习过程，模型通过与环境的交互来学习如何采取行动，从而最大化长期回报。

### 6.2 关键特点

1. 环境交互：智能体（Agent）通过行动影响环境并获得反馈（奖励或惩罚）。
2. 目标：找到使累积奖励（总回报）最大的策略。
3. 适用场景：任务序列复杂，反馈延迟明显。

### 6.3 关键概念

1. **状态（State）**：当前环境的描述，例如棋盘位置。
2. **动作（Action）**：在当前状态下可以执行的动作。
3. **奖励（Reward）**：执行动作后环境给予的反馈。
4. **策略（Policy）**：指导智能体如何选择动作的规则。

### 6.4 常见算法

##### 1. 基于值函数

* Q-learning
* 深度 Q 网络（DQN）

##### 2. 基于策略优化

* 策略梯度方法
* Actor-Critic 方法

##### 3. 模型驱动方法

* 蒙特卡洛树搜索（MCTS）

### 6.5 应用场景

1. 游戏 AI（如 AlphaGo、强化学习玩 Atari 游戏）
2. 自动驾驶（优化驾驶策略）
3. 动态资源分配（如数据中心任务调度）


## 7.拟合

> 在机器学习中，拟合（fitting）指的是模型学习训练数据中的模式和规律的过程。具体来说，它是模型通过调整其参数，使其对训练数据表现得尽可能好的过程。

### 7.1 拟合的含义

•拟合的目标：模型通过学习训练数据中的输入（特征）和输出（目标值）之间的关系，来预测新的未见数据的输出。
•拟合程度：衡量模型学习了多少训练数据的模式，通常反映为模型在训练集上的表现。

### 7.2 三种拟合状态

模型训练中的拟合状态可以分为以下三种情况：

1. 欠拟合（Underfitting）
   表现：
   模型对训练数据的模式学习不足，无法很好地拟合训练数据。无法从数据中提取足够的信息，导致在训练集和测试集上都表现不好。
   原因：
   •模型过于简单，容量不足（如线性模型尝试拟合非线性数据）。
   •训练不足（如 epoch 次数太少）。
   •输入特征不足或质量差。
   •解决方法：
   •增加模型的复杂度（如使用更深的神经网络或更复杂的算法）。
   •进行更长时间的训练。
   •提高输入数据的质量或增加更多相关特征。
2. 适当拟合（Good Fit）
   表现：
   模型在训练集上表现良好，同时在测试集上的表现也较好。表明模型学习到了数据中的主要模式，同时能够很好地泛化到未见数据。
   特点：
   •这是模型训练的理想状态。
   •需要通过调节超参数、选择模型架构和正则化等方法来实现。
3. 过拟合（Overfitting）
   表现：
   模型在训练集上表现非常好，但在测试集或新数据上表现较差。
   说明模型过度学习了训练数据的细节和噪声，而不是数据的真实模式。
   原因：
   •模型过于复杂，参数过多（如深度太大的神经网络）。
   •训练时间过长（过多的 epoch）。
   •训练数据不足或噪声较大。
   解决方法：
   •增加训练数据量。
   •使用正则化技术（如L1/L2正则化、Dropout）。
   •提前停止训练（Early Stopping）。
   •简化模型结构。

### 7.3 拟合的直观类比

可以将拟合类比为学生做题学习：
•欠拟合：学生没有认真学习，只掌握了浅层知识，遇到稍复杂的问题就不会解答。
•适当拟合：学生掌握了知识点的核心规律，能灵活运用解决不同类型的问题。
•过拟合：学生死记硬背了所有的训练题目，考试时只能做类似的题目，对新题束手无策。

如何衡量拟合状态
•训练误差：模型在训练集上的表现。
•验证误差：模型在验证集上的表现，用于评估泛化能力。
•测试误差：模型在未见数据（测试集）上的表现，用于最终评价。

通过比较训练误差和验证误差，可以判断模型的拟合状态：
•训练误差和验证误差都高：欠拟合。
•训练误差低，验证误差高：过拟合。
•训练误差和验证误差都较低且接近：适当拟合。

### 7.4 总结

拟合是指模型对训练数据模式的学习过程，目标是找到一个适当的拟合状态，使模型既能很好地学习训练数据，又能泛化到未见数据。这是机器学习中的核心任务之一。