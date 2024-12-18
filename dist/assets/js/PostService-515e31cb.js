import{p as buffer,K as getDefaultExportFromCjs,U as __vitePreload}from"./index-8d2aa1e9.js";import{_ as __vite_glob_0_0,a as __vite_glob_0_1,b as __vite_glob_0_2,c as __vite_glob_0_3,d as __vite_glob_0_4}from"./todo-db7772ba.js";const __vite_glob_2_0=`---
title: 'demo blog'
description: 'this is a demo for blog display'
name: 'hello'
category: 'demo'
tags: ['test','tt2','tt3']
date: '2024/4/11 11:54:10'
---
# T1
> HTML 代码 HTML codes

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <meta name="keywords" content="Editor.md, Markdown, Editor" />
        <title>Hello world!</title>
        <style type="text/css">
            body{font-size:14px;color:#444;font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;background:#fff;}
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        </style>
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
        <p class="text-green">Plain text</p>
    </body>
</html>
\`\`\`
# T2
## T2.1哈哈哈
\`\`\`mermaid
graph LR
A --- B
B --- B1
B --- B2
A --- C
B2 --- C
\`\`\`


`,__vite_glob_2_1=`---
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
  比如数据：x = [[1.0], [2.0], [3.0]]\`
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
        $L = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$
        • $y_i$ ：真实值
        • $\\hat{y}_i$ ：模型预测值
特点：对误差平方，放大了大误差的影响。

2.平均绝对误差（Mean Absolute Error, MAE）：
        $L = \\frac{1}{n} \\sum_{i=1}^{n} |y_i - \\hat{y}_i|$
        特点：对异常值（Outliers）更鲁棒，但对小误差不敏感。

#### 2.3.2. 分类任务：用于预测离散标签（如猫/狗分类）的模型。

常见损失函数：
1.交叉熵损失（Cross Entropy Loss）：
$L = -\\frac{1}{n} \\sum_{i=1}^{n} \\sum_{c=1}^{C} y_{i,c} \\log(\\hat{y}_{i,c})$
• $y_{i,c}$ ：第 i 个样本属于类别 c 的真实标签（1 或 0）
• $\\hat{y}_{i,c}$ ：模型预测的第 i 个样本属于类别 c 的概率

#### 2.3.3. 其他任务：如生成任务、排名任务等，可使用定制损失函数。

### 2.4 损失函数与优化器的关系：

损失函数定义了模型的优化目标，而优化器（如 SGD、Adam）负责基于损失函数的梯度调整模型参数，从而使损失值逐步下降。

### 2.5 在 simple_model_training_demo中使用了 均方误差（MSE） 作为损失函数。

•    reduction='sum' 表示计算所有样本的误差平方和 $（\\sum(y_i - \\hat{y}_i)^2）$。
•    作用是衡量模型的预测值 y_pred 和真实值 y_data 的差距。

### 2.6 损失函数的优化过程：

1. 前向传播：计算预测值 $\\hat{y}$ 。
2. 计算损失：通过损失函数比较  $\\hat{y}$  和真实值  y 。
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

• 如果当前  w = 2 ，梯度  $ \\nabla_w L = 2w = 4$ ，表示损失在  w = 2  时增加了。梯度指引我们把  w  减小。
• 如果当前  w = -1 ，梯度  $\\nabla_w L = 2w = -2$ ，表示损失在  w = -1  时下降了。梯度指引我们把  w  增加。

#### 3.2.2. 梯度下降法

**1 梯度下降法的原理**
梯度下降法通过以下公式调整参数，来逐步减少损失函数的值：
$\\theta_{t+1} = \\theta_t - \\eta \\cdot \\nabla_{\\theta_t} L$
• $\\theta_t$ ：当前的参数值（比如权重和偏置）。
• $\\nabla_{\\theta_t} L$ ：当前参数对损失函数的梯度。
• $\\eta$ ：学习率，表示每次更新的步长。
这个公式的核心思想是：沿着梯度下降的方向（负梯度方向）调整参数，从而让损失函数更接近最小值。
**2. 梯度下降的形象比喻**
可以把损失函数看成是一座山，模型参数是你在山上的位置，你的目标是找到山底（损失最小值）。
1.梯度告诉你当前脚下地势的倾斜方向（往哪个方向下降最快）。
2.优化器就是向导，它根据梯度指导你每一步该怎么走（调整参数）。
3.**学习率（步长）** 决定每一步走多远。步子太大，可能会错过山底，甚至翻到另一侧。步子太小，走得慢，耗时长。
通过不断地走，你最终会到达山底，找到参数的最佳值。

#### 3.2.3. 优化器的工作步骤，优化器的任务就是自动执行以下步骤：

(1) 前向传播
通过模型的当前参数计算预测值  $\\hat{y}$ ，然后根据预测值和真实值计算损失**L** 。
损失**L**是优化器的优化目标。
(2) 反向传播
计算损失**L**对模型参数的梯度$（ \\nabla L ）$（这个过程是由自动微分完成的（在 PyTorch 中是 loss.backward())）
(3) 参数更新
根据梯度下降公式调整模型参数：
$\\theta_{t+1} = \\theta_t - \\eta \\cdot \\nabla_{\\theta_t} L$
• $\\theta_t$ ：当前参数（例如权重、偏置）。
• $\\nabla_{\\theta_t} L$ ：损失函数  L  对参数  \\theta_t  的梯度。
• $\\eta$ ：学习率（learning rate），控制每次更新的步长。
• $\\theta_{t+1}$ ：更新后的参数。
例如权重和偏置的更新：
$w_{t+1} = w_t - \\eta \\cdot \\nabla_w L$
$b_{t+1} = b_t - \\eta \\cdot \\nabla_b L$
这一步由优化器（如 SGD、Adam）完成，自动应用更新。
(4) 循环重复
重复以上步骤，直到损失函数收敛到一个较小的值或达到训练的最大轮数。

### 3.3 常见的优化器

#### 3.3.1. 随机梯度下降（SGD）

原理：每次仅基于一个小批量数据（mini-batch）的梯度更新参数。
优点：简单高效。
缺点：可能收敛速度慢，并容易陷入局部最优解。
PyTorch 示例：
\`\`\`python optimizer = torch.optim.SGD(model.parameters(), lr=0.01) \`\`\`

#### 3.3.2. 动量优化（Momentum）

原理：在梯度下降中加入“动量”，保留之前的更新方向，以更快地收敛。
公式：
$v_{t+1} = \\beta v_t - \\eta \\nabla_{\\theta_t} L$
$\\theta_{t+1} = \\theta_t + v_{t+1}$
优点：加速收敛，减少振荡。

#### 3.3.3. Adam（自适应矩估计）

原理：结合动量优化和自适应学习率调整。
特点：对不同参数动态调整学习率，适合处理稀疏梯度。
公式：
$m_t = \\beta_1 m_{t-1} + (1-\\beta_1) \\nabla_{\\theta_t} L$
$v_t = \\beta_2 v_{t-1} + (1-\\beta_2) (\\nabla_{\\theta_t} L)^2$
m_t：一阶动量。
v_t：二阶动量。
PyTorch 示例：

\`\`\`python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001) 
\`\`\`

#### 3.3.4. RMSprop

原理：通过平方梯度的移动平均调整学习率。
优点：适合处理非平稳目标函数。
PyTorch 示例：

\`\`\`python
optimizer = torch.optim.RMSprop(model.parameters(), lr=0.01) 
\`\`\`

### 3.4 优化器中的学习率

• 学习率 ( $\\eta$ ) 决定了每次参数更新的步长
• 学习率过大：可能会错过最优解，甚至导致发散。
• 学习率过小：收敛速度慢，训练时间过长。
• 通常可以使用 学习率调度器 动态调整学习率。

### 3.5 优化器在simple_model_training_demo代码中的体现

\`\`\`python
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
for epoch in range(100):
        y_pred = model(x_data)         # 前向传播，计算预测值
     loss = criterion(y_pred, y_data) # 计算损失
     optimizer.zero_grad()          # 清空上一次的梯度
     loss.backward()                # 反向传播，计算梯度
     optimizer.step()               # 更新参数
\`\`\`

1. 使用了 随机梯度下降（SGD） 作为优化器。
2. model.parameters()：将模型的所有参数（权重和偏置）传递给优化器，以便更新。
3. lr=0.01：学习率为 0.01，控制每次参数更新的步长。
4. optimizer.zero_grad()：清空上一步的梯度，避免梯度叠加。
5. loss.backward()：计算损失函数对模型参数的梯度（ $\\nabla_{\\theta_t} L$ ）。
6. optimizer.step()：根据梯度下降公式更新参数：$\\theta_{t+1} = \\theta_t - \\eta \\cdot \\nabla_{\\theta_t} L$

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
`,__vite_glob_2_2=`---
title: '机器学习资源链接'
description: '一些网上关于machine learning的资源链接'
name: ''
category: 'ML'
tags: ['machine learning','web url']
date: '2024/12/13 11:54:10'
---

1. [tensorflow 官网](https://www.tensorflow.org/?hl=zh-cn)
2. [keras 文档](https://keras-zh.readthedocs.io/getting-started/sequential-model-guide/)
3. [LLM-TAP电子书](https://intro-llm.github.io/chapter/LLM-TAP.pdf)
4. [开源大模型食用指南](https://github.com/datawhalechina/self-llm/blob/master/models/)
5. [Transformer 论文:《Attention Is All You Need》 ](https://arxiv.org/html/1706.03762v7)
6. [关于自监督学习SSL的讲解](https://www.ibm.com/cn-zh/topics/self-supervised-learning)
7. [Learn NLP with transformers](https://datawhalechina.github.io/learn-nlp-with-transformers/#/./%E7%AF%87%E7%AB%A02-Transformer%E7%9B%B8%E5%85%B3%E5%8E%9F%E7%90%86/2.1-%E5%9B%BE%E8%A7%A3attention)
8. [transformers 入门](https://transformers.run/c1/transformer/)
9. [Machine Learning Type](https://www.ibm.com/think/topics/machine-learning-types)
`,__vite_glob_2_3=`---
title: 'Python 关于machine learning常用的包'
description: '一些Python 关于machine learning常用的包'
name: ''
category: 'ML'
tags: ['machine learning','python']
date: '2024/12/13 11:54:10'
---

# 1. pytorch
## 1.1. 核心包
- **torch：** 也称为 PyTorch，是一个开源的机器学习库，主要用于深度学习。它提供了张量计算（类似于 NumPy）和 GPU 加速。
- **torchvision：** 是 PyTorch 的一个扩展库，专门用于计算机视觉任务。它包含常用的数据集、模型和图像处理工具。
- **torchaudio：** 是 PyTorch 的一个扩展库，专门用于音频处理。它提供了音频数据的加载、转换和模型。
## 1.2. 依赖包
安装 PyTorch 及其扩展库时，会涉及到很多其他包和库，这些包用于提供底层功能、优化性能或处理其他特定任务：
- **mpmath**：一个 Python 库，用于执行任意精度的浮点数运算。
- **typing**-extensions：提供了 Python 标准库中 typing 模块的新功能，这些功能可能在将来会被添加到标准库中。
- **sympy**：用于符号数学计算的 Python 库。
- **pillow**：一个 Python 图像处理库。
- **nvidia-nvtx-cu12, nvidia-nvjitlink-cu12, nvidia-nccl-cu12, nvidia-curand-cu12, nvidia-cufft-cu12, nvidia-cuda-runtime-cu12, nvidia-cuda-nvrtc-cu12, nvidia-cuda-cupti-cu12, nvidia-cublas-cu12, nvidia-cusparse-cu12, nvidia-cudnn-cu12, nvidia-cusolver-cu12**：这些是 NVIDIA 提供的库，用于在 GPU 上进行高效计算。它们涵盖了各种加速计算的功能，包括随机数生成（curand）、FFT（cufft）、基本线性代数（cublas）、稀疏矩阵运算（cusparse）、深度神经网络加速（cudnn）、解线性方程（cusolver）等。
- **numpy**：一个常用的科学计算库，提供支持大型多维数组和矩阵的操作，以及大量的数学函数库。
- **networkx**：用于创建、操作和研究复杂网络结构的 Python 库。
- **MarkupSafe**：一个用于标记安全字符串的库，通常用于防止 HTML 注入。
- **fsspec**：一个文件系统规范接口，可以与多个文件系统进行交互。
- **filelock**：提供一个简单的跨平台文件锁机制。
- **jinja2**：一个用于 Python 的现代和设计友好的模板引擎，通常用于生成 HTML 文件。
## 1.3. 关系与作用
- **torch** 是主要的深度学习框架，需要使用 GPU 加速和科学计算库，因此依赖于多个 NVIDIA 库（如 nvidia-cublas-cu12, nvidia-cudnn-cu12）和科学计算库（如 numpy）。
- **torchvision** 和 torchaudio 分别用于计算机视觉和音频处理，依赖于 torch 提供的核心功能，并且可能依赖于图像处理库（如 pillow）和音频处理库。
- 这些 NVIDIA 库 提供了对 GPU 的支持，使得 PyTorch 可以利用 GPU 加速深度学习计算。
- 其他库如 networkx, sympy, MarkupSafe, jinja2 等提供了辅助功能，支持数据处理、符号计算、模板引擎等任务。
这些包的组合使得 PyTorch 及其扩展库能够高效地处理深度学习任务，特别是在有 GPU 支持的情况下，大大提高了计算性能和处理能力
`,__vite_glob_2_4=`---
title: '我的代办'
description: '我的代办'
name: ''
category: 'ML'
tags: ['machine learning','todo list']
date: '2024/12/13 11:54:10'
---

# TODO List

## 1.编码技能

> 构建机器学习模型不仅要了解机器学习的概念，还需要编码，以便管理数据、调整参数以及解析测试和优化模型所需的结果。

## 2.数学和统计学

> 机器学习是一门数学密集型学科，因此，如果您打算修改机器学习模型或从头开始构建新模型，那么熟悉基础数学概念对于该过程至关重要。

- [ ]  向量：定义，计算
- [ ]  张量：定义，计算
- [ ]  矩阵：定义，计算
- [ ]  微积分：定义，计算
- [ ]  求导：定义，计算

## 3.机器学习理论

> 了解机器学习理论的基础知识将为您打下基础，并且可在出现问题时帮助您排查问题。

## 4.构建您自己的项目

> 亲身体验机器学习是检验知识掌握情况的最佳方式。不要害怕，尽早开始通过简单的 Colab 或教程获取一些实践经验。

## 5. 开发框架等

- [ ]  Transformer 结构

## 6.热门词汇

- [ ]  卷积
- [ ]  LLM Agent: What. Why. How
- [ ]  Transformer: What. Why. How
`;var empty=null,empty_1=empty,toString=Object.prototype.toString,kindOf=function(n){if(n===void 0)return"undefined";if(n===null)return"null";var r=typeof n;if(r==="boolean")return"boolean";if(r==="string")return"string";if(r==="number")return"number";if(r==="symbol")return"symbol";if(r==="function")return isGeneratorFn(n)?"generatorfunction":"function";if(isArray(n))return"array";if(isBuffer$1(n))return"buffer";if(isArguments(n))return"arguments";if(isDate(n))return"date";if(isError(n))return"error";if(isRegexp(n))return"regexp";switch(ctorName(n)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(isGeneratorObj(n))return"generator";switch(r=toString.call(n),r){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return r.slice(8,-1).toLowerCase().replace(/\s/g,"")};function ctorName(e){return typeof e.constructor=="function"?e.constructor.name:null}function isArray(e){return Array.isArray?Array.isArray(e):e instanceof Array}function isError(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function isDate(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function isRegexp(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}function isGeneratorFn(e,n){return ctorName(e)==="GeneratorFunction"}function isGeneratorObj(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}function isArguments(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(n){if(n.message.indexOf("callee")!==-1)return!0}return!1}function isBuffer$1(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var isExtendable=function(n){return typeof n<"u"&&n!==null&&(typeof n=="object"||typeof n=="function")},isObject$1=isExtendable,extendShallow=function(n){isObject$1(n)||(n={});for(var r=arguments.length,o=1;o<r;o++){var t=arguments[o];isObject$1(t)&&assign(n,t)}return n};function assign(e,n){for(var r in n)hasOwn(n,r)&&(e[r]=n[r])}function hasOwn(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var typeOf$2=kindOf,extend$1=extendShallow,sectionMatter=function(e,n){typeof n=="function"&&(n={parse:n});var r=toObject(e),o={section_delimiter:"---",parse:identity},t=extend$1({},o,n),a=t.section_delimiter,l=r.content.split(/\r?\n/),c=null,u=createSection(),s=[],f=[];function p(E){r.content=E,c=[],s=[]}function d(E){f.length&&(u.key=getKey(f[0],a),u.content=E,t.parse(u,c),c.push(u),u=createSection(),s=[],f=[])}for(var h=0;h<l.length;h++){var m=l[h],g=f.length,_=m.trim();if(isDelimiter(_,a)){if(_.length===3&&h!==0){if(g===0||g===2){s.push(m);continue}f.push(_),u.data=s.join(`
`),s=[];continue}c===null&&p(s.join(`
`)),g===2&&d(s.join(`
`)),f.push(_);continue}s.push(m)}return c===null?p(s.join(`
`)):d(s.join(`
`)),r.sections=c,r};function isDelimiter(e,n){return!(e.slice(0,n.length)!==n||e.charAt(n.length+1)===n.slice(-1))}function toObject(e){if(typeOf$2(e)!=="object"&&(e={content:e}),typeof e.content!="string"&&!isBuffer(e.content))throw new TypeError("expected a buffer or string");return e.content=e.content.toString(),e.sections=[],e}function getKey(e,n){return e?e.slice(n.length).trim():""}function createSection(){return{key:"",data:"",content:""}}function identity(e){return e}function isBuffer(e){return e&&e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}var engines$2={exports:{}},jsYaml$1={},loader$1={},common$6={};function isNothing(e){return typeof e>"u"||e===null}function isObject(e){return typeof e=="object"&&e!==null}function toArray(e){return Array.isArray(e)?e:isNothing(e)?[]:[e]}function extend(e,n){var r,o,t,a;if(n)for(a=Object.keys(n),r=0,o=a.length;r<o;r+=1)t=a[r],e[t]=n[t];return e}function repeat(e,n){var r="",o;for(o=0;o<n;o+=1)r+=e;return r}function isNegativeZero(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}common$6.isNothing=isNothing;common$6.isObject=isObject;common$6.toArray=toArray;common$6.repeat=repeat;common$6.isNegativeZero=isNegativeZero;common$6.extend=extend;function YAMLException$4(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}YAMLException$4.prototype=Object.create(Error.prototype);YAMLException$4.prototype.constructor=YAMLException$4;YAMLException$4.prototype.toString=function(n){var r=this.name+": ";return r+=this.reason||"(unknown reason)",!n&&this.mark&&(r+=" "+this.mark.toString()),r};var exception=YAMLException$4,common$5=common$6;function Mark$1(e,n,r,o,t){this.name=e,this.buffer=n,this.position=r,this.line=o,this.column=t}Mark$1.prototype.getSnippet=function(n,r){var o,t,a,l,c;if(!this.buffer)return null;for(n=n||4,r=r||75,o="",t=this.position;t>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(t-1))===-1;)if(t-=1,this.position-t>r/2-1){o=" ... ",t+=5;break}for(a="",l=this.position;l<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(l))===-1;)if(l+=1,l-this.position>r/2-1){a=" ... ",l-=5;break}return c=this.buffer.slice(t,l),common$5.repeat(" ",n)+o+c+a+`
`+common$5.repeat(" ",n+this.position-t+o.length)+"^"};Mark$1.prototype.toString=function(n){var r,o="";return this.name&&(o+='in "'+this.name+'" '),o+="at line "+(this.line+1)+", column "+(this.column+1),n||(r=this.getSnippet(),r&&(o+=`:
`+r)),o};var mark=Mark$1,YAMLException$3=exception,TYPE_CONSTRUCTOR_OPTIONS=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],YAML_NODE_KINDS=["scalar","sequence","mapping"];function compileStyleAliases(e){var n={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(o){n[String(o)]=r})}),n}function Type$h(e,n){if(n=n||{},Object.keys(n).forEach(function(r){if(TYPE_CONSTRUCTOR_OPTIONS.indexOf(r)===-1)throw new YAMLException$3('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(r){return r},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.defaultStyle=n.defaultStyle||null,this.styleAliases=compileStyleAliases(n.styleAliases||null),YAML_NODE_KINDS.indexOf(this.kind)===-1)throw new YAMLException$3('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var type=Type$h,common$4=common$6,YAMLException$2=exception,Type$g=type;function compileList(e,n,r){var o=[];return e.include.forEach(function(t){r=compileList(t,n,r)}),e[n].forEach(function(t){r.forEach(function(a,l){a.tag===t.tag&&a.kind===t.kind&&o.push(l)}),r.push(t)}),r.filter(function(t,a){return o.indexOf(a)===-1})}function compileMap(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},n,r;function o(t){e[t.kind][t.tag]=e.fallback[t.tag]=t}for(n=0,r=arguments.length;n<r;n+=1)arguments[n].forEach(o);return e}function Schema$5(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(n){if(n.loadKind&&n.loadKind!=="scalar")throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=compileList(this,"implicit",[]),this.compiledExplicit=compileList(this,"explicit",[]),this.compiledTypeMap=compileMap(this.compiledImplicit,this.compiledExplicit)}Schema$5.DEFAULT=null;Schema$5.create=function(){var n,r;switch(arguments.length){case 1:n=Schema$5.DEFAULT,r=arguments[0];break;case 2:n=arguments[0],r=arguments[1];break;default:throw new YAMLException$2("Wrong number of arguments for Schema.create function")}if(n=common$4.toArray(n),r=common$4.toArray(r),!n.every(function(o){return o instanceof Schema$5}))throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!r.every(function(o){return o instanceof Type$g}))throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new Schema$5({include:n,explicit:r})};var schema=Schema$5,Type$f=type,str=new Type$f("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Type$e=type,seq=new Type$e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Type$d=type,map=new Type$d("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Schema$4=schema,failsafe=new Schema$4({explicit:[str,seq,map]}),Type$c=type;function resolveYamlNull(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function constructYamlNull(){return null}function isNull(e){return e===null}var _null=new Type$c("tag:yaml.org,2002:null",{kind:"scalar",resolve:resolveYamlNull,construct:constructYamlNull,predicate:isNull,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Type$b=type;function resolveYamlBoolean(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function constructYamlBoolean(e){return e==="true"||e==="True"||e==="TRUE"}function isBoolean(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var bool=new Type$b("tag:yaml.org,2002:bool",{kind:"scalar",resolve:resolveYamlBoolean,construct:constructYamlBoolean,predicate:isBoolean,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),common$3=common$6,Type$a=type;function isHexCode(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function isOctCode(e){return 48<=e&&e<=55}function isDecCode(e){return 48<=e&&e<=57}function resolveYamlInteger(e){if(e===null)return!1;var n=e.length,r=0,o=!1,t;if(!n)return!1;if(t=e[r],(t==="-"||t==="+")&&(t=e[++r]),t==="0"){if(r+1===n)return!0;if(t=e[++r],t==="b"){for(r++;r<n;r++)if(t=e[r],t!=="_"){if(t!=="0"&&t!=="1")return!1;o=!0}return o&&t!=="_"}if(t==="x"){for(r++;r<n;r++)if(t=e[r],t!=="_"){if(!isHexCode(e.charCodeAt(r)))return!1;o=!0}return o&&t!=="_"}for(;r<n;r++)if(t=e[r],t!=="_"){if(!isOctCode(e.charCodeAt(r)))return!1;o=!0}return o&&t!=="_"}if(t==="_")return!1;for(;r<n;r++)if(t=e[r],t!=="_"){if(t===":")break;if(!isDecCode(e.charCodeAt(r)))return!1;o=!0}return!o||t==="_"?!1:t!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(r))}function constructYamlInteger(e){var n=e,r=1,o,t,a=[];return n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(r=-1),n=n.slice(1),o=n[0]),n==="0"?0:o==="0"?n[1]==="b"?r*parseInt(n.slice(2),2):n[1]==="x"?r*parseInt(n,16):r*parseInt(n,8):n.indexOf(":")!==-1?(n.split(":").forEach(function(l){a.unshift(parseInt(l,10))}),n=0,t=1,a.forEach(function(l){n+=l*t,t*=60}),r*n):r*parseInt(n,10)}function isInteger(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!common$3.isNegativeZero(e)}var int=new Type$a("tag:yaml.org,2002:int",{kind:"scalar",resolve:resolveYamlInteger,construct:constructYamlInteger,predicate:isInteger,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),common$2=common$6,Type$9=type,YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(e){return!(e===null||!YAML_FLOAT_PATTERN.test(e)||e[e.length-1]==="_")}function constructYamlFloat(e){var n,r,o,t;return n=e.replace(/_/g,"").toLowerCase(),r=n[0]==="-"?-1:1,t=[],"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:n.indexOf(":")>=0?(n.split(":").forEach(function(a){t.unshift(parseFloat(a,10))}),n=0,o=1,t.forEach(function(a){n+=a*o,o*=60}),r*n):r*parseFloat(n,10)}var SCIENTIFIC_WITHOUT_DOT=/^[-+]?[0-9]+e/;function representYamlFloat(e,n){var r;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(common$2.isNegativeZero(e))return"-0.0";return r=e.toString(10),SCIENTIFIC_WITHOUT_DOT.test(r)?r.replace("e",".e"):r}function isFloat(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||common$2.isNegativeZero(e))}var float=new Type$9("tag:yaml.org,2002:float",{kind:"scalar",resolve:resolveYamlFloat,construct:constructYamlFloat,predicate:isFloat,represent:representYamlFloat,defaultStyle:"lowercase"}),Schema$3=schema,json=new Schema$3({include:[failsafe],implicit:[_null,bool,int,float]}),Schema$2=schema,core=new Schema$2({include:[json]}),Type$8=type,YAML_DATE_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function resolveYamlTimestamp(e){return e===null?!1:YAML_DATE_REGEXP.exec(e)!==null||YAML_TIMESTAMP_REGEXP.exec(e)!==null}function constructYamlTimestamp(e){var n,r,o,t,a,l,c,u=0,s=null,f,p,d;if(n=YAML_DATE_REGEXP.exec(e),n===null&&(n=YAML_TIMESTAMP_REGEXP.exec(e)),n===null)throw new Error("Date resolve error");if(r=+n[1],o=+n[2]-1,t=+n[3],!n[4])return new Date(Date.UTC(r,o,t));if(a=+n[4],l=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(f=+n[10],p=+(n[11]||0),s=(f*60+p)*6e4,n[9]==="-"&&(s=-s)),d=new Date(Date.UTC(r,o,t,a,l,c,u)),s&&d.setTime(d.getTime()-s),d}function representYamlTimestamp(e){return e.toISOString()}var timestamp=new Type$8("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:resolveYamlTimestamp,construct:constructYamlTimestamp,instanceOf:Date,represent:representYamlTimestamp}),Type$7=type;function resolveYamlMerge(e){return e==="<<"||e===null}var merge=new Type$7("tag:yaml.org,2002:merge",{kind:"scalar",resolve:resolveYamlMerge});function commonjsRequire(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var NodeBuffer;try{var _require$1=commonjsRequire;NodeBuffer=_require$1("buffer").Buffer}catch{}var Type$6=type,BASE64_MAP=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function resolveYamlBinary(e){if(e===null)return!1;var n,r,o=0,t=e.length,a=BASE64_MAP;for(r=0;r<t;r++)if(n=a.indexOf(e.charAt(r)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function constructYamlBinary(e){var n,r,o=e.replace(/[\r\n=]/g,""),t=o.length,a=BASE64_MAP,l=0,c=[];for(n=0;n<t;n++)n%4===0&&n&&(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)),l=l<<6|a.indexOf(o.charAt(n));return r=t%4*6,r===0?(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)):r===18?(c.push(l>>10&255),c.push(l>>2&255)):r===12&&c.push(l>>4&255),NodeBuffer?NodeBuffer.from?NodeBuffer.from(c):new NodeBuffer(c):c}function representYamlBinary(e){var n="",r=0,o,t,a=e.length,l=BASE64_MAP;for(o=0;o<a;o++)o%3===0&&o&&(n+=l[r>>18&63],n+=l[r>>12&63],n+=l[r>>6&63],n+=l[r&63]),r=(r<<8)+e[o];return t=a%3,t===0?(n+=l[r>>18&63],n+=l[r>>12&63],n+=l[r>>6&63],n+=l[r&63]):t===2?(n+=l[r>>10&63],n+=l[r>>4&63],n+=l[r<<2&63],n+=l[64]):t===1&&(n+=l[r>>2&63],n+=l[r<<4&63],n+=l[64],n+=l[64]),n}function isBinary(e){return NodeBuffer&&NodeBuffer.isBuffer(e)}var binary=new Type$6("tag:yaml.org,2002:binary",{kind:"scalar",resolve:resolveYamlBinary,construct:constructYamlBinary,predicate:isBinary,represent:representYamlBinary}),Type$5=type,_hasOwnProperty$3=Object.prototype.hasOwnProperty,_toString$2=Object.prototype.toString;function resolveYamlOmap(e){if(e===null)return!0;var n=[],r,o,t,a,l,c=e;for(r=0,o=c.length;r<o;r+=1){if(t=c[r],l=!1,_toString$2.call(t)!=="[object Object]")return!1;for(a in t)if(_hasOwnProperty$3.call(t,a))if(!l)l=!0;else return!1;if(!l)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function constructYamlOmap(e){return e!==null?e:[]}var omap=new Type$5("tag:yaml.org,2002:omap",{kind:"sequence",resolve:resolveYamlOmap,construct:constructYamlOmap}),Type$4=type,_toString$1=Object.prototype.toString;function resolveYamlPairs(e){if(e===null)return!0;var n,r,o,t,a,l=e;for(a=new Array(l.length),n=0,r=l.length;n<r;n+=1){if(o=l[n],_toString$1.call(o)!=="[object Object]"||(t=Object.keys(o),t.length!==1))return!1;a[n]=[t[0],o[t[0]]]}return!0}function constructYamlPairs(e){if(e===null)return[];var n,r,o,t,a,l=e;for(a=new Array(l.length),n=0,r=l.length;n<r;n+=1)o=l[n],t=Object.keys(o),a[n]=[t[0],o[t[0]]];return a}var pairs=new Type$4("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:resolveYamlPairs,construct:constructYamlPairs}),Type$3=type,_hasOwnProperty$2=Object.prototype.hasOwnProperty;function resolveYamlSet(e){if(e===null)return!0;var n,r=e;for(n in r)if(_hasOwnProperty$2.call(r,n)&&r[n]!==null)return!1;return!0}function constructYamlSet(e){return e!==null?e:{}}var set=new Type$3("tag:yaml.org,2002:set",{kind:"mapping",resolve:resolveYamlSet,construct:constructYamlSet}),Schema$1=schema,default_safe=new Schema$1({include:[core],implicit:[timestamp,merge],explicit:[binary,omap,pairs,set]}),Type$2=type;function resolveJavascriptUndefined(){return!0}function constructJavascriptUndefined(){}function representJavascriptUndefined(){return""}function isUndefined(e){return typeof e>"u"}var _undefined=new Type$2("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:resolveJavascriptUndefined,construct:constructJavascriptUndefined,predicate:isUndefined,represent:representJavascriptUndefined}),Type$1=type;function resolveJavascriptRegExp(e){if(e===null||e.length===0)return!1;var n=e,r=/\/([gim]*)$/.exec(e),o="";return!(n[0]==="/"&&(r&&(o=r[1]),o.length>3||n[n.length-o.length-1]!=="/"))}function constructJavascriptRegExp(e){var n=e,r=/\/([gim]*)$/.exec(e),o="";return n[0]==="/"&&(r&&(o=r[1]),n=n.slice(1,n.length-o.length-1)),new RegExp(n,o)}function representJavascriptRegExp(e){var n="/"+e.source+"/";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),n}function isRegExp(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var regexp=new Type$1("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:resolveJavascriptRegExp,construct:constructJavascriptRegExp,predicate:isRegExp,represent:representJavascriptRegExp}),esprima;try{var _require=commonjsRequire;esprima=_require("esprima")}catch{typeof window<"u"&&(esprima=window.esprima)}var Type=type;function resolveJavascriptFunction(e){if(e===null)return!1;try{var n="("+e+")",r=esprima.parse(n,{range:!0});return!(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function constructJavascriptFunction(e){var n="("+e+")",r=esprima.parse(n,{range:!0}),o=[],t;if(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return r.body[0].expression.params.forEach(function(a){o.push(a.name)}),t=r.body[0].expression.body.range,r.body[0].expression.body.type==="BlockStatement"?new Function(o,n.slice(t[0]+1,t[1]-1)):new Function(o,"return "+n.slice(t[0],t[1]))}function representJavascriptFunction(e){return e.toString()}function isFunction(e){return Object.prototype.toString.call(e)==="[object Function]"}var _function=new Type("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:resolveJavascriptFunction,construct:constructJavascriptFunction,predicate:isFunction,represent:representJavascriptFunction}),Schema=schema,default_full=Schema.DEFAULT=new Schema({include:[default_safe],explicit:[_undefined,regexp,_function]}),common$1=common$6,YAMLException$1=exception,Mark=mark,DEFAULT_SAFE_SCHEMA$1=default_safe,DEFAULT_FULL_SCHEMA$1=default_full,_hasOwnProperty$1=Object.prototype.hasOwnProperty,CONTEXT_FLOW_IN=1,CONTEXT_FLOW_OUT=2,CONTEXT_BLOCK_IN=3,CONTEXT_BLOCK_OUT=4,CHOMPING_CLIP=1,CHOMPING_STRIP=2,CHOMPING_KEEP=3,PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/,PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/,PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i,PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function _class(e){return Object.prototype.toString.call(e)}function is_EOL(e){return e===10||e===13}function is_WHITE_SPACE(e){return e===9||e===32}function is_WS_OR_EOL(e){return e===9||e===32||e===10||e===13}function is_FLOW_INDICATOR(e){return e===44||e===91||e===93||e===123||e===125}function fromHexCode(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function escapedHexLen(e){return e===120?2:e===117?4:e===85?8:0}function fromDecimalCode(e){return 48<=e&&e<=57?e-48:-1}function simpleEscapeSequence(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function charFromCodepoint(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var simpleEscapeCheck=new Array(256),simpleEscapeMap=new Array(256);for(var i=0;i<256;i++)simpleEscapeCheck[i]=simpleEscapeSequence(i)?1:0,simpleEscapeMap[i]=simpleEscapeSequence(i);function State$1(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||DEFAULT_FULL_SCHEMA$1,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function generateError(e,n){return new YAMLException$1(n,new Mark(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function throwError(e,n){throw generateError(e,n)}function throwWarning(e,n){e.onWarning&&e.onWarning.call(null,generateError(e,n))}var directiveHandlers={YAML:function(n,r,o){var t,a,l;n.version!==null&&throwError(n,"duplication of %YAML directive"),o.length!==1&&throwError(n,"YAML directive accepts exactly one argument"),t=/^([0-9]+)\.([0-9]+)$/.exec(o[0]),t===null&&throwError(n,"ill-formed argument of the YAML directive"),a=parseInt(t[1],10),l=parseInt(t[2],10),a!==1&&throwError(n,"unacceptable YAML version of the document"),n.version=o[0],n.checkLineBreaks=l<2,l!==1&&l!==2&&throwWarning(n,"unsupported YAML version of the document")},TAG:function(n,r,o){var t,a;o.length!==2&&throwError(n,"TAG directive accepts exactly two arguments"),t=o[0],a=o[1],PATTERN_TAG_HANDLE.test(t)||throwError(n,"ill-formed tag handle (first argument) of the TAG directive"),_hasOwnProperty$1.call(n.tagMap,t)&&throwError(n,'there is a previously declared suffix for "'+t+'" tag handle'),PATTERN_TAG_URI.test(a)||throwError(n,"ill-formed tag prefix (second argument) of the TAG directive"),n.tagMap[t]=a}};function captureSegment(e,n,r,o){var t,a,l,c;if(n<r){if(c=e.input.slice(n,r),o)for(t=0,a=c.length;t<a;t+=1)l=c.charCodeAt(t),l===9||32<=l&&l<=1114111||throwError(e,"expected valid JSON character");else PATTERN_NON_PRINTABLE.test(c)&&throwError(e,"the stream contains non-printable characters");e.result+=c}}function mergeMappings(e,n,r,o){var t,a,l,c;for(common$1.isObject(r)||throwError(e,"cannot merge mappings; the provided source object is unacceptable"),t=Object.keys(r),l=0,c=t.length;l<c;l+=1)a=t[l],_hasOwnProperty$1.call(n,a)||(n[a]=r[a],o[a]=!0)}function storeMappingPair(e,n,r,o,t,a,l,c){var u,s;if(Array.isArray(t))for(t=Array.prototype.slice.call(t),u=0,s=t.length;u<s;u+=1)Array.isArray(t[u])&&throwError(e,"nested arrays are not supported inside keys"),typeof t=="object"&&_class(t[u])==="[object Object]"&&(t[u]="[object Object]");if(typeof t=="object"&&_class(t)==="[object Object]"&&(t="[object Object]"),t=String(t),n===null&&(n={}),o==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(u=0,s=a.length;u<s;u+=1)mergeMappings(e,n,a[u],r);else mergeMappings(e,n,a,r);else!e.json&&!_hasOwnProperty$1.call(r,t)&&_hasOwnProperty$1.call(n,t)&&(e.line=l||e.line,e.position=c||e.position,throwError(e,"duplicated mapping key")),n[t]=a,delete r[t];return n}function readLineBreak(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):throwError(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function skipSeparationSpace(e,n,r){for(var o=0,t=e.input.charCodeAt(e.position);t!==0;){for(;is_WHITE_SPACE(t);)t=e.input.charCodeAt(++e.position);if(n&&t===35)do t=e.input.charCodeAt(++e.position);while(t!==10&&t!==13&&t!==0);if(is_EOL(t))for(readLineBreak(e),t=e.input.charCodeAt(e.position),o++,e.lineIndent=0;t===32;)e.lineIndent++,t=e.input.charCodeAt(++e.position);else break}return r!==-1&&o!==0&&e.lineIndent<r&&throwWarning(e,"deficient indentation"),o}function testDocumentSeparator(e){var n=e.position,r;return r=e.input.charCodeAt(n),!!((r===45||r===46)&&r===e.input.charCodeAt(n+1)&&r===e.input.charCodeAt(n+2)&&(n+=3,r=e.input.charCodeAt(n),r===0||is_WS_OR_EOL(r)))}function writeFoldedLines(e,n){n===1?e.result+=" ":n>1&&(e.result+=common$1.repeat(`
`,n-1))}function readPlainScalar(e,n,r){var o,t,a,l,c,u,s,f,p=e.kind,d=e.result,h;if(h=e.input.charCodeAt(e.position),is_WS_OR_EOL(h)||is_FLOW_INDICATOR(h)||h===35||h===38||h===42||h===33||h===124||h===62||h===39||h===34||h===37||h===64||h===96||(h===63||h===45)&&(t=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(t)||r&&is_FLOW_INDICATOR(t)))return!1;for(e.kind="scalar",e.result="",a=l=e.position,c=!1;h!==0;){if(h===58){if(t=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(t)||r&&is_FLOW_INDICATOR(t))break}else if(h===35){if(o=e.input.charCodeAt(e.position-1),is_WS_OR_EOL(o))break}else{if(e.position===e.lineStart&&testDocumentSeparator(e)||r&&is_FLOW_INDICATOR(h))break;if(is_EOL(h))if(u=e.line,s=e.lineStart,f=e.lineIndent,skipSeparationSpace(e,!1,-1),e.lineIndent>=n){c=!0,h=e.input.charCodeAt(e.position);continue}else{e.position=l,e.line=u,e.lineStart=s,e.lineIndent=f;break}}c&&(captureSegment(e,a,l,!1),writeFoldedLines(e,e.line-u),a=l=e.position,c=!1),is_WHITE_SPACE(h)||(l=e.position+1),h=e.input.charCodeAt(++e.position)}return captureSegment(e,a,l,!1),e.result?!0:(e.kind=p,e.result=d,!1)}function readSingleQuotedScalar(e,n){var r,o,t;if(r=e.input.charCodeAt(e.position),r!==39)return!1;for(e.kind="scalar",e.result="",e.position++,o=t=e.position;(r=e.input.charCodeAt(e.position))!==0;)if(r===39)if(captureSegment(e,o,e.position,!0),r=e.input.charCodeAt(++e.position),r===39)o=e.position,e.position++,t=e.position;else return!0;else is_EOL(r)?(captureSegment(e,o,t,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,n)),o=t=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a single quoted scalar"):(e.position++,t=e.position);throwError(e,"unexpected end of the stream within a single quoted scalar")}function readDoubleQuotedScalar(e,n){var r,o,t,a,l,c;if(c=e.input.charCodeAt(e.position),c!==34)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(c=e.input.charCodeAt(e.position))!==0;){if(c===34)return captureSegment(e,r,e.position,!0),e.position++,!0;if(c===92){if(captureSegment(e,r,e.position,!0),c=e.input.charCodeAt(++e.position),is_EOL(c))skipSeparationSpace(e,!1,n);else if(c<256&&simpleEscapeCheck[c])e.result+=simpleEscapeMap[c],e.position++;else if((l=escapedHexLen(c))>0){for(t=l,a=0;t>0;t--)c=e.input.charCodeAt(++e.position),(l=fromHexCode(c))>=0?a=(a<<4)+l:throwError(e,"expected hexadecimal character");e.result+=charFromCodepoint(a),e.position++}else throwError(e,"unknown escape sequence");r=o=e.position}else is_EOL(c)?(captureSegment(e,r,o,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,n)),r=o=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}throwError(e,"unexpected end of the stream within a double quoted scalar")}function readFlowCollection(e,n){var r=!0,o,t=e.tag,a,l=e.anchor,c,u,s,f,p,d={},h,m,g,_;if(_=e.input.charCodeAt(e.position),_===91)u=93,p=!1,a=[];else if(_===123)u=125,p=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),_=e.input.charCodeAt(++e.position);_!==0;){if(skipSeparationSpace(e,!0,n),_=e.input.charCodeAt(e.position),_===u)return e.position++,e.tag=t,e.anchor=l,e.kind=p?"mapping":"sequence",e.result=a,!0;r||throwError(e,"missed comma between flow collection entries"),m=h=g=null,s=f=!1,_===63&&(c=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(c)&&(s=f=!0,e.position++,skipSeparationSpace(e,!0,n))),o=e.line,composeNode(e,n,CONTEXT_FLOW_IN,!1,!0),m=e.tag,h=e.result,skipSeparationSpace(e,!0,n),_=e.input.charCodeAt(e.position),(f||e.line===o)&&_===58&&(s=!0,_=e.input.charCodeAt(++e.position),skipSeparationSpace(e,!0,n),composeNode(e,n,CONTEXT_FLOW_IN,!1,!0),g=e.result),p?storeMappingPair(e,a,d,m,h,g):s?a.push(storeMappingPair(e,null,d,m,h,g)):a.push(h),skipSeparationSpace(e,!0,n),_=e.input.charCodeAt(e.position),_===44?(r=!0,_=e.input.charCodeAt(++e.position)):r=!1}throwError(e,"unexpected end of the stream within a flow collection")}function readBlockScalar(e,n){var r,o,t=CHOMPING_CLIP,a=!1,l=!1,c=n,u=0,s=!1,f,p;if(p=e.input.charCodeAt(e.position),p===124)o=!1;else if(p===62)o=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)CHOMPING_CLIP===t?t=p===43?CHOMPING_KEEP:CHOMPING_STRIP:throwError(e,"repeat of a chomping mode identifier");else if((f=fromDecimalCode(p))>=0)f===0?throwError(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?throwError(e,"repeat of an indentation width identifier"):(c=n+f-1,l=!0);else break;if(is_WHITE_SPACE(p)){do p=e.input.charCodeAt(++e.position);while(is_WHITE_SPACE(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!is_EOL(p)&&p!==0)}for(;p!==0;){for(readLineBreak(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),is_EOL(p)){u++;continue}if(e.lineIndent<c){t===CHOMPING_KEEP?e.result+=common$1.repeat(`
`,a?1+u:u):t===CHOMPING_CLIP&&a&&(e.result+=`
`);break}for(o?is_WHITE_SPACE(p)?(s=!0,e.result+=common$1.repeat(`
`,a?1+u:u)):s?(s=!1,e.result+=common$1.repeat(`
`,u+1)):u===0?a&&(e.result+=" "):e.result+=common$1.repeat(`
`,u):e.result+=common$1.repeat(`
`,a?1+u:u),a=!0,l=!0,u=0,r=e.position;!is_EOL(p)&&p!==0;)p=e.input.charCodeAt(++e.position);captureSegment(e,r,e.position,!1)}return!0}function readBlockSequence(e,n){var r,o=e.tag,t=e.anchor,a=[],l,c=!1,u;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),u=e.input.charCodeAt(e.position);u!==0&&!(u!==45||(l=e.input.charCodeAt(e.position+1),!is_WS_OR_EOL(l)));){if(c=!0,e.position++,skipSeparationSpace(e,!0,-1)&&e.lineIndent<=n){a.push(null),u=e.input.charCodeAt(e.position);continue}if(r=e.line,composeNode(e,n,CONTEXT_BLOCK_IN,!1,!0),a.push(e.result),skipSeparationSpace(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>n)&&u!==0)throwError(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return c?(e.tag=o,e.anchor=t,e.kind="sequence",e.result=a,!0):!1}function readBlockMapping(e,n,r){var o,t,a,l,c=e.tag,u=e.anchor,s={},f={},p=null,d=null,h=null,m=!1,g=!1,_;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),_=e.input.charCodeAt(e.position);_!==0;){if(o=e.input.charCodeAt(e.position+1),a=e.line,l=e.position,(_===63||_===58)&&is_WS_OR_EOL(o))_===63?(m&&(storeMappingPair(e,s,f,p,d,null),p=d=h=null),g=!0,m=!0,t=!0):m?(m=!1,t=!0):throwError(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,_=o;else if(composeNode(e,r,CONTEXT_FLOW_OUT,!1,!0))if(e.line===a){for(_=e.input.charCodeAt(e.position);is_WHITE_SPACE(_);)_=e.input.charCodeAt(++e.position);if(_===58)_=e.input.charCodeAt(++e.position),is_WS_OR_EOL(_)||throwError(e,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(storeMappingPair(e,s,f,p,d,null),p=d=h=null),g=!0,m=!1,t=!1,p=e.tag,d=e.result;else if(g)throwError(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=u,!0}else if(g)throwError(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=u,!0;else break;if((e.line===a||e.lineIndent>n)&&(composeNode(e,n,CONTEXT_BLOCK_OUT,!0,t)&&(m?d=e.result:h=e.result),m||(storeMappingPair(e,s,f,p,d,h,a,l),p=d=h=null),skipSeparationSpace(e,!0,-1),_=e.input.charCodeAt(e.position)),e.lineIndent>n&&_!==0)throwError(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return m&&storeMappingPair(e,s,f,p,d,null),g&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=s),g}function readTagProperty(e){var n,r=!1,o=!1,t,a,l;if(l=e.input.charCodeAt(e.position),l!==33)return!1;if(e.tag!==null&&throwError(e,"duplication of a tag property"),l=e.input.charCodeAt(++e.position),l===60?(r=!0,l=e.input.charCodeAt(++e.position)):l===33?(o=!0,t="!!",l=e.input.charCodeAt(++e.position)):t="!",n=e.position,r){do l=e.input.charCodeAt(++e.position);while(l!==0&&l!==62);e.position<e.length?(a=e.input.slice(n,e.position),l=e.input.charCodeAt(++e.position)):throwError(e,"unexpected end of the stream within a verbatim tag")}else{for(;l!==0&&!is_WS_OR_EOL(l);)l===33&&(o?throwError(e,"tag suffix cannot contain exclamation marks"):(t=e.input.slice(n-1,e.position+1),PATTERN_TAG_HANDLE.test(t)||throwError(e,"named tag handle cannot contain such characters"),o=!0,n=e.position+1)),l=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),PATTERN_FLOW_INDICATORS.test(a)&&throwError(e,"tag suffix cannot contain flow indicator characters")}return a&&!PATTERN_TAG_URI.test(a)&&throwError(e,"tag name cannot contain such characters: "+a),r?e.tag=a:_hasOwnProperty$1.call(e.tagMap,t)?e.tag=e.tagMap[t]+a:t==="!"?e.tag="!"+a:t==="!!"?e.tag="tag:yaml.org,2002:"+a:throwError(e,'undeclared tag handle "'+t+'"'),!0}function readAnchorProperty(e){var n,r;if(r=e.input.charCodeAt(e.position),r!==38)return!1;for(e.anchor!==null&&throwError(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!is_WS_OR_EOL(r)&&!is_FLOW_INDICATOR(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&throwError(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function readAlias(e){var n,r,o;if(o=e.input.charCodeAt(e.position),o!==42)return!1;for(o=e.input.charCodeAt(++e.position),n=e.position;o!==0&&!is_WS_OR_EOL(o)&&!is_FLOW_INDICATOR(o);)o=e.input.charCodeAt(++e.position);return e.position===n&&throwError(e,"name of an alias node must contain at least one character"),r=e.input.slice(n,e.position),_hasOwnProperty$1.call(e.anchorMap,r)||throwError(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],skipSeparationSpace(e,!0,-1),!0}function composeNode(e,n,r,o,t){var a,l,c,u=1,s=!1,f=!1,p,d,h,m,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=l=c=CONTEXT_BLOCK_OUT===r||CONTEXT_BLOCK_IN===r,o&&skipSeparationSpace(e,!0,-1)&&(s=!0,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)),u===1)for(;readTagProperty(e)||readAnchorProperty(e);)skipSeparationSpace(e,!0,-1)?(s=!0,c=a,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)):c=!1;if(c&&(c=s||t),(u===1||CONTEXT_BLOCK_OUT===r)&&(CONTEXT_FLOW_IN===r||CONTEXT_FLOW_OUT===r?m=n:m=n+1,g=e.position-e.lineStart,u===1?c&&(readBlockSequence(e,g)||readBlockMapping(e,g,m))||readFlowCollection(e,m)?f=!0:(l&&readBlockScalar(e,m)||readSingleQuotedScalar(e,m)||readDoubleQuotedScalar(e,m)?f=!0:readAlias(e)?(f=!0,(e.tag!==null||e.anchor!==null)&&throwError(e,"alias node should not have any properties")):readPlainScalar(e,m,CONTEXT_FLOW_IN===r)&&(f=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(f=c&&readBlockSequence(e,g))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&throwError(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,d=e.implicitTypes.length;p<d;p+=1)if(h=e.implicitTypes[p],h.resolve(e.result)){e.result=h.construct(e.result),e.tag=h.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else _hasOwnProperty$1.call(e.typeMap[e.kind||"fallback"],e.tag)?(h=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&h.kind!==e.kind&&throwError(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+h.kind+'", not "'+e.kind+'"'),h.resolve(e.result)?(e.result=h.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):throwError(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):throwError(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||f}function readDocument(e){var n=e.position,r,o,t,a=!1,l;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(l=e.input.charCodeAt(e.position))!==0&&(skipSeparationSpace(e,!0,-1),l=e.input.charCodeAt(e.position),!(e.lineIndent>0||l!==37));){for(a=!0,l=e.input.charCodeAt(++e.position),r=e.position;l!==0&&!is_WS_OR_EOL(l);)l=e.input.charCodeAt(++e.position);for(o=e.input.slice(r,e.position),t=[],o.length<1&&throwError(e,"directive name must not be less than one character in length");l!==0;){for(;is_WHITE_SPACE(l);)l=e.input.charCodeAt(++e.position);if(l===35){do l=e.input.charCodeAt(++e.position);while(l!==0&&!is_EOL(l));break}if(is_EOL(l))break;for(r=e.position;l!==0&&!is_WS_OR_EOL(l);)l=e.input.charCodeAt(++e.position);t.push(e.input.slice(r,e.position))}l!==0&&readLineBreak(e),_hasOwnProperty$1.call(directiveHandlers,o)?directiveHandlers[o](e,o,t):throwWarning(e,'unknown document directive "'+o+'"')}if(skipSeparationSpace(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,skipSeparationSpace(e,!0,-1)):a&&throwError(e,"directives end mark is expected"),composeNode(e,e.lineIndent-1,CONTEXT_BLOCK_OUT,!1,!0),skipSeparationSpace(e,!0,-1),e.checkLineBreaks&&PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(n,e.position))&&throwWarning(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&testDocumentSeparator(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,skipSeparationSpace(e,!0,-1));return}if(e.position<e.length-1)throwError(e,"end of the stream or a document separator is expected");else return}function loadDocuments(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new State$1(e,n),o=e.indexOf("\0");for(o!==-1&&(r.position=o,throwError(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)readDocument(r);return r.documents}function loadAll(e,n,r){n!==null&&typeof n=="object"&&typeof r>"u"&&(r=n,n=null);var o=loadDocuments(e,r);if(typeof n!="function")return o;for(var t=0,a=o.length;t<a;t+=1)n(o[t])}function load(e,n){var r=loadDocuments(e,n);if(r.length!==0){if(r.length===1)return r[0];throw new YAMLException$1("expected a single document in the stream, but found more")}}function safeLoadAll(e,n,r){return typeof n=="object"&&n!==null&&typeof r>"u"&&(r=n,n=null),loadAll(e,n,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},r))}function safeLoad(e,n){return load(e,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},n))}loader$1.loadAll=loadAll;loader$1.load=load;loader$1.safeLoadAll=safeLoadAll;loader$1.safeLoad=safeLoad;var dumper$1={},common=common$6,YAMLException=exception,DEFAULT_FULL_SCHEMA=default_full,DEFAULT_SAFE_SCHEMA=default_safe,_toString=Object.prototype.toString,_hasOwnProperty=Object.prototype.hasOwnProperty,CHAR_TAB=9,CHAR_LINE_FEED=10,CHAR_CARRIAGE_RETURN=13,CHAR_SPACE=32,CHAR_EXCLAMATION=33,CHAR_DOUBLE_QUOTE=34,CHAR_SHARP=35,CHAR_PERCENT=37,CHAR_AMPERSAND=38,CHAR_SINGLE_QUOTE=39,CHAR_ASTERISK=42,CHAR_COMMA=44,CHAR_MINUS=45,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_GREATER_THAN=62,CHAR_QUESTION=63,CHAR_COMMERCIAL_AT=64,CHAR_LEFT_SQUARE_BRACKET=91,CHAR_RIGHT_SQUARE_BRACKET=93,CHAR_GRAVE_ACCENT=96,CHAR_LEFT_CURLY_BRACKET=123,CHAR_VERTICAL_LINE=124,CHAR_RIGHT_CURLY_BRACKET=125,ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0]="\\0";ESCAPE_SEQUENCES[7]="\\a";ESCAPE_SEQUENCES[8]="\\b";ESCAPE_SEQUENCES[9]="\\t";ESCAPE_SEQUENCES[10]="\\n";ESCAPE_SEQUENCES[11]="\\v";ESCAPE_SEQUENCES[12]="\\f";ESCAPE_SEQUENCES[13]="\\r";ESCAPE_SEQUENCES[27]="\\e";ESCAPE_SEQUENCES[34]='\\"';ESCAPE_SEQUENCES[92]="\\\\";ESCAPE_SEQUENCES[133]="\\N";ESCAPE_SEQUENCES[160]="\\_";ESCAPE_SEQUENCES[8232]="\\L";ESCAPE_SEQUENCES[8233]="\\P";var DEPRECATED_BOOLEANS_SYNTAX=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function compileStyleMap(e,n){var r,o,t,a,l,c,u;if(n===null)return{};for(r={},o=Object.keys(n),t=0,a=o.length;t<a;t+=1)l=o[t],c=String(n[l]),l.slice(0,2)==="!!"&&(l="tag:yaml.org,2002:"+l.slice(2)),u=e.compiledTypeMap.fallback[l],u&&_hasOwnProperty.call(u.styleAliases,c)&&(c=u.styleAliases[c]),r[l]=c;return r}function encodeHex(e){var n,r,o;if(n=e.toString(16).toUpperCase(),e<=255)r="x",o=2;else if(e<=65535)r="u",o=4;else if(e<=4294967295)r="U",o=8;else throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+common.repeat("0",o-n.length)+n}function State(e){this.schema=e.schema||DEFAULT_FULL_SCHEMA,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=common.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=compileStyleMap(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function indentString(e,n){for(var r=common.repeat(" ",n),o=0,t=-1,a="",l,c=e.length;o<c;)t=e.indexOf(`
`,o),t===-1?(l=e.slice(o),o=c):(l=e.slice(o,t+1),o=t+1),l.length&&l!==`
`&&(a+=r),a+=l;return a}function generateNextLine(e,n){return`
`+common.repeat(" ",e.indent*n)}function testImplicitResolving(e,n){var r,o,t;for(r=0,o=e.implicitTypes.length;r<o;r+=1)if(t=e.implicitTypes[r],t.resolve(n))return!0;return!1}function isWhitespace(e){return e===CHAR_SPACE||e===CHAR_TAB}function isPrintable(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function isNsChar(e){return isPrintable(e)&&!isWhitespace(e)&&e!==65279&&e!==CHAR_CARRIAGE_RETURN&&e!==CHAR_LINE_FEED}function isPlainSafe(e,n){return isPrintable(e)&&e!==65279&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_COLON&&(e!==CHAR_SHARP||n&&isNsChar(n))}function isPlainSafeFirst(e){return isPrintable(e)&&e!==65279&&!isWhitespace(e)&&e!==CHAR_MINUS&&e!==CHAR_QUESTION&&e!==CHAR_COLON&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_SHARP&&e!==CHAR_AMPERSAND&&e!==CHAR_ASTERISK&&e!==CHAR_EXCLAMATION&&e!==CHAR_VERTICAL_LINE&&e!==CHAR_EQUALS&&e!==CHAR_GREATER_THAN&&e!==CHAR_SINGLE_QUOTE&&e!==CHAR_DOUBLE_QUOTE&&e!==CHAR_PERCENT&&e!==CHAR_COMMERCIAL_AT&&e!==CHAR_GRAVE_ACCENT}function needIndentIndicator(e){var n=/^\n* /;return n.test(e)}var STYLE_PLAIN=1,STYLE_SINGLE=2,STYLE_LITERAL=3,STYLE_FOLDED=4,STYLE_DOUBLE=5;function chooseScalarStyle(e,n,r,o,t){var a,l,c,u=!1,s=!1,f=o!==-1,p=-1,d=isPlainSafeFirst(e.charCodeAt(0))&&!isWhitespace(e.charCodeAt(e.length-1));if(n)for(a=0;a<e.length;a++){if(l=e.charCodeAt(a),!isPrintable(l))return STYLE_DOUBLE;c=a>0?e.charCodeAt(a-1):null,d=d&&isPlainSafe(l,c)}else{for(a=0;a<e.length;a++){if(l=e.charCodeAt(a),l===CHAR_LINE_FEED)u=!0,f&&(s=s||a-p-1>o&&e[p+1]!==" ",p=a);else if(!isPrintable(l))return STYLE_DOUBLE;c=a>0?e.charCodeAt(a-1):null,d=d&&isPlainSafe(l,c)}s=s||f&&a-p-1>o&&e[p+1]!==" "}return!u&&!s?d&&!t(e)?STYLE_PLAIN:STYLE_SINGLE:r>9&&needIndentIndicator(e)?STYLE_DOUBLE:s?STYLE_FOLDED:STYLE_LITERAL}function writeScalar(e,n,r,o){e.dump=function(){if(n.length===0)return"''";if(!e.noCompatMode&&DEPRECATED_BOOLEANS_SYNTAX.indexOf(n)!==-1)return"'"+n+"'";var t=e.indent*Math.max(1,r),a=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-t),l=o||e.flowLevel>-1&&r>=e.flowLevel;function c(u){return testImplicitResolving(e,u)}switch(chooseScalarStyle(n,l,e.indent,a,c)){case STYLE_PLAIN:return n;case STYLE_SINGLE:return"'"+n.replace(/'/g,"''")+"'";case STYLE_LITERAL:return"|"+blockHeader(n,e.indent)+dropEndingNewline(indentString(n,t));case STYLE_FOLDED:return">"+blockHeader(n,e.indent)+dropEndingNewline(indentString(foldString(n,a),t));case STYLE_DOUBLE:return'"'+escapeString(n)+'"';default:throw new YAMLException("impossible error: invalid scalar style")}}()}function blockHeader(e,n){var r=needIndentIndicator(e)?String(n):"",o=e[e.length-1]===`
`,t=o&&(e[e.length-2]===`
`||e===`
`),a=t?"+":o?"":"-";return r+a+`
`}function dropEndingNewline(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function foldString(e,n){for(var r=/(\n+)([^\n]*)/g,o=function(){var s=e.indexOf(`
`);return s=s!==-1?s:e.length,r.lastIndex=s,foldLine(e.slice(0,s),n)}(),t=e[0]===`
`||e[0]===" ",a,l;l=r.exec(e);){var c=l[1],u=l[2];a=u[0]===" ",o+=c+(!t&&!a&&u!==""?`
`:"")+foldLine(u,n),t=a}return o}function foldLine(e,n){if(e===""||e[0]===" ")return e;for(var r=/ [^ ]/g,o,t=0,a,l=0,c=0,u="";o=r.exec(e);)c=o.index,c-t>n&&(a=l>t?l:c,u+=`
`+e.slice(t,a),t=a+1),l=c;return u+=`
`,e.length-t>n&&l>t?u+=e.slice(t,l)+`
`+e.slice(l+1):u+=e.slice(t),u.slice(1)}function escapeString(e){for(var n="",r,o,t,a=0;a<e.length;a++){if(r=e.charCodeAt(a),r>=55296&&r<=56319&&(o=e.charCodeAt(a+1),o>=56320&&o<=57343)){n+=encodeHex((r-55296)*1024+o-56320+65536),a++;continue}t=ESCAPE_SEQUENCES[r],n+=!t&&isPrintable(r)?e[a]:t||encodeHex(r)}return n}function writeFlowSequence(e,n,r){var o="",t=e.tag,a,l;for(a=0,l=r.length;a<l;a+=1)writeNode(e,n,r[a],!1,!1)&&(a!==0&&(o+=","+(e.condenseFlow?"":" ")),o+=e.dump);e.tag=t,e.dump="["+o+"]"}function writeBlockSequence(e,n,r,o){var t="",a=e.tag,l,c;for(l=0,c=r.length;l<c;l+=1)writeNode(e,n+1,r[l],!0,!0)&&((!o||l!==0)&&(t+=generateNextLine(e,n)),e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?t+="-":t+="- ",t+=e.dump);e.tag=a,e.dump=t||"[]"}function writeFlowMapping(e,n,r){var o="",t=e.tag,a=Object.keys(r),l,c,u,s,f;for(l=0,c=a.length;l<c;l+=1)f="",l!==0&&(f+=", "),e.condenseFlow&&(f+='"'),u=a[l],s=r[u],writeNode(e,n,u,!1,!1)&&(e.dump.length>1024&&(f+="? "),f+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),writeNode(e,n,s,!1,!1)&&(f+=e.dump,o+=f));e.tag=t,e.dump="{"+o+"}"}function writeBlockMapping(e,n,r,o){var t="",a=e.tag,l=Object.keys(r),c,u,s,f,p,d;if(e.sortKeys===!0)l.sort();else if(typeof e.sortKeys=="function")l.sort(e.sortKeys);else if(e.sortKeys)throw new YAMLException("sortKeys must be a boolean or a function");for(c=0,u=l.length;c<u;c+=1)d="",(!o||c!==0)&&(d+=generateNextLine(e,n)),s=l[c],f=r[s],writeNode(e,n+1,s,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,p&&(d+=generateNextLine(e,n)),writeNode(e,n+1,f,!0,p)&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?d+=":":d+=": ",d+=e.dump,t+=d));e.tag=a,e.dump=t||"{}"}function detectType(e,n,r){var o,t,a,l,c,u;for(t=r?e.explicitTypes:e.implicitTypes,a=0,l=t.length;a<l;a+=1)if(c=t[a],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof n=="object"&&n instanceof c.instanceOf)&&(!c.predicate||c.predicate(n))){if(e.tag=r?c.tag:"?",c.represent){if(u=e.styleMap[c.tag]||c.defaultStyle,_toString.call(c.represent)==="[object Function]")o=c.represent(n,u);else if(_hasOwnProperty.call(c.represent,u))o=c.represent[u](n,u);else throw new YAMLException("!<"+c.tag+'> tag resolver accepts not "'+u+'" style');e.dump=o}return!0}return!1}function writeNode(e,n,r,o,t,a){e.tag=null,e.dump=r,detectType(e,r,!1)||detectType(e,r,!0);var l=_toString.call(e.dump);o&&(o=e.flowLevel<0||e.flowLevel>n);var c=l==="[object Object]"||l==="[object Array]",u,s;if(c&&(u=e.duplicates.indexOf(r),s=u!==-1),(e.tag!==null&&e.tag!=="?"||s||e.indent!==2&&n>0)&&(t=!1),s&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(c&&s&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),l==="[object Object]")o&&Object.keys(e.dump).length!==0?(writeBlockMapping(e,n,e.dump,t),s&&(e.dump="&ref_"+u+e.dump)):(writeFlowMapping(e,n,e.dump),s&&(e.dump="&ref_"+u+" "+e.dump));else if(l==="[object Array]"){var f=e.noArrayIndent&&n>0?n-1:n;o&&e.dump.length!==0?(writeBlockSequence(e,f,e.dump,t),s&&(e.dump="&ref_"+u+e.dump)):(writeFlowSequence(e,f,e.dump),s&&(e.dump="&ref_"+u+" "+e.dump))}else if(l==="[object String]")e.tag!=="?"&&writeScalar(e,e.dump,n,a);else{if(e.skipInvalid)return!1;throw new YAMLException("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function getDuplicateReferences(e,n){var r=[],o=[],t,a;for(inspectNode(e,r,o),t=0,a=o.length;t<a;t+=1)n.duplicates.push(r[o[t]]);n.usedDuplicates=new Array(a)}function inspectNode(e,n,r){var o,t,a;if(e!==null&&typeof e=="object")if(t=n.indexOf(e),t!==-1)r.indexOf(t)===-1&&r.push(t);else if(n.push(e),Array.isArray(e))for(t=0,a=e.length;t<a;t+=1)inspectNode(e[t],n,r);else for(o=Object.keys(e),t=0,a=o.length;t<a;t+=1)inspectNode(e[o[t]],n,r)}function dump(e,n){n=n||{};var r=new State(n);return r.noRefs||getDuplicateReferences(e,r),writeNode(r,0,e,!0,!0)?r.dump+`
`:""}function safeDump(e,n){return dump(e,common.extend({schema:DEFAULT_SAFE_SCHEMA},n))}dumper$1.dump=dump;dumper$1.safeDump=safeDump;var loader=loader$1,dumper=dumper$1;function deprecated(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}jsYaml$1.Type=type;jsYaml$1.Schema=schema;jsYaml$1.FAILSAFE_SCHEMA=failsafe;jsYaml$1.JSON_SCHEMA=json;jsYaml$1.CORE_SCHEMA=core;jsYaml$1.DEFAULT_SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_FULL_SCHEMA=default_full;jsYaml$1.load=loader.load;jsYaml$1.loadAll=loader.loadAll;jsYaml$1.safeLoad=loader.safeLoad;jsYaml$1.safeLoadAll=loader.safeLoadAll;jsYaml$1.dump=dumper.dump;jsYaml$1.safeDump=dumper.safeDump;jsYaml$1.YAMLException=exception;jsYaml$1.MINIMAL_SCHEMA=failsafe;jsYaml$1.SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_SCHEMA=default_full;jsYaml$1.scan=deprecated("scan");jsYaml$1.parse=deprecated("parse");jsYaml$1.compose=deprecated("compose");jsYaml$1.addConstructor=deprecated("addConstructor");var yaml=jsYaml$1,jsYaml=yaml;(function(module,exports){const yaml=jsYaml,engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,n){const r=Object.assign({replacer:null,space:2},n);return JSON.stringify(e,r.replacer,r.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(e){if(wrap!==!1&&/(unexpected|identifier)/i.test(e.message))return parse(str,options,!1);throw new SyntaxError(e)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines$2);var enginesExports=engines$2.exports,utils$3={};/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var stripBomString=function(e){return typeof e=="string"&&e.charAt(0)==="\uFEFF"?e.slice(1):e};(function(e){const n=stripBomString,r=kindOf;e.define=function(o,t,a){Reflect.defineProperty(o,t,{enumerable:!1,configurable:!0,writable:!0,value:a})},e.isBuffer=function(o){return r(o)==="buffer"},e.isObject=function(o){return r(o)==="object"},e.toBuffer=function(o){return typeof o=="string"?buffer.Buffer.from(o):o},e.toString=function(o){if(e.isBuffer(o))return n(String(o));if(typeof o!="string")throw new TypeError("expected input to be a string or buffer");return n(o)},e.arrayify=function(o){return o?Array.isArray(o)?o:[o]:[]},e.startsWith=function(o,t,a){return typeof a!="number"&&(a=t.length),o.slice(0,a)===t}})(utils$3);const engines$1=enginesExports,utils$2=utils$3;var defaults$4=function(e){const n=Object.assign({},e);return n.delimiters=utils$2.arrayify(n.delims||n.delimiters||"---"),n.delimiters.length===1&&n.delimiters.push(n.delimiters[0]),n.language=(n.language||n.lang||"yaml").toLowerCase(),n.engines=Object.assign({},engines$1,n.parsers,n.engines),n},engine=function(e,n){let r=n.engines[e]||n.engines[aliase(e)];if(typeof r>"u")throw new Error('gray-matter engine "'+e+'" is not registered');return typeof r=="function"&&(r={parse:r}),r};function aliase(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}const typeOf$1=kindOf,getEngine$1=engine,defaults$3=defaults$4;var stringify$2=function(e,n,r){if(n==null&&r==null)switch(typeOf$1(e)){case"object":n=e.data,r={};break;case"string":return e;default:throw new TypeError("expected file to be a string or object")}const o=e.content,t=defaults$3(r);if(n==null){if(!t.data)return e;n=t.data}const a=e.language||t.language,l=getEngine$1(a,t);if(typeof l.stringify!="function")throw new TypeError('expected "'+a+'.stringify" to be a function');n=Object.assign({},e.data,n);const c=t.delimiters[0],u=t.delimiters[1],s=l.stringify(n,r).trim();let f="";return s!=="{}"&&(f=newline(c)+newline(s)+newline(u)),typeof e.excerpt=="string"&&e.excerpt!==""&&o.indexOf(e.excerpt.trim())===-1&&(f+=newline(e.excerpt)+newline(u)),f+newline(o)};function newline(e){return e.slice(-1)!==`
`?e+`
`:e}const defaults$2=defaults$4;var excerpt$1=function(e,n){const r=defaults$2(n);if(e.data==null&&(e.data={}),typeof r.excerpt=="function")return r.excerpt(e,r);const o=e.data.excerpt_separator||r.excerpt_separator;if(o==null&&(r.excerpt===!1||r.excerpt==null))return e;const t=typeof r.excerpt=="string"?r.excerpt:o||r.delimiters[0],a=e.content.indexOf(t);return a!==-1&&(e.excerpt=e.content.slice(0,a)),e};const typeOf=kindOf,stringify$1=stringify$2,utils$1=utils$3;var toFile$1=function(e){return typeOf(e)!=="object"&&(e={content:e}),typeOf(e.data)!=="object"&&(e.data={}),e.contents&&e.content==null&&(e.content=e.contents),utils$1.define(e,"orig",utils$1.toBuffer(e.content)),utils$1.define(e,"language",e.language||""),utils$1.define(e,"matter",e.matter||""),utils$1.define(e,"stringify",function(n,r){return r&&r.language&&(e.language=r.language),stringify$1(e,n,r)}),e.content=utils$1.toString(e.content),e.isEmpty=!1,e.excerpt="",e};const getEngine=engine,defaults$1=defaults$4;var parse$1=function(e,n,r){const o=defaults$1(r),t=getEngine(e,o);if(typeof t.parse!="function")throw new TypeError('expected "'+e+'.parse" to be a function');return t.parse(n,o)};const fs=empty_1,sections=sectionMatter,defaults=defaults$4,stringify=stringify$2,excerpt=excerpt$1,engines=enginesExports,toFile=toFile$1,parse=parse$1,utils=utils$3;function matter(e,n){if(e==="")return{data:{},content:e,excerpt:"",orig:e};let r=toFile(e);const o=matter.cache[r.content];if(!n){if(o)return r=Object.assign({},o),r.orig=o.orig,r;matter.cache[r.content]=r}return parseMatter(r,n)}function parseMatter(e,n){const r=defaults(n),o=r.delimiters[0],t=`
`+r.delimiters[1];let a=e.content;r.language&&(e.language=r.language);const l=o.length;if(!utils.startsWith(a,o,l))return excerpt(e,r),e;if(a.charAt(l)===o.slice(-1))return e;a=a.slice(l);const c=a.length,u=matter.language(a,r);u.name&&(e.language=u.name,a=a.slice(u.raw.length));let s=a.indexOf(t);return s===-1&&(s=c),e.matter=a.slice(0,s),e.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(e.isEmpty=!0,e.empty=e.content,e.data={}):e.data=parse(e.language,e.matter,r),s===c?e.content="":(e.content=a.slice(s+t.length),e.content[0]==="\r"&&(e.content=e.content.slice(1)),e.content[0]===`
`&&(e.content=e.content.slice(1))),excerpt(e,r),(r.sections===!0||typeof r.section=="function")&&sections(e,r.section),e}matter.engines=engines;matter.stringify=function(e,n,r){return typeof e=="string"&&(e=matter(e,r)),stringify(e,n,r)};matter.read=function(e,n){const r=fs.readFileSync(e,"utf8"),o=matter(r,n);return o.path=e,o};matter.test=function(e,n){return utils.startsWith(e,defaults(n).delimiters[0])};matter.language=function(e,n){const o=defaults(n).delimiters[0];matter.test(e)&&(e=e.slice(o.length));const t=e.slice(0,e.search(/\r?\n/));return{raw:t,name:t?t.trim():""}};matter.cache={};matter.clearCache=function(){matter.cache={}};var grayMatter=matter;const matter$1=getDefaultExportFromCjs(grayMatter);class PostService{static readLocalMarkdownFile(n){return PostService.readLocalMarkdownFile2(n).then(r=>{console.log(">>>>>>>>>>>>>>>>>>>>>>>>readLocalMarkdownFile:",r)}),new Promise((r,o)=>{fetch(`/${n}`).then(t=>{t.ok?r(t.text()):o(`fetch error! status: ${t.status}`)})})}static readLocalMarkdownFile2(n){return new Promise((r,o)=>{const t=__vitePreload(()=>import(`/${n}?raw`),[]);r(t.default)})}static getLocalDirectoryTree1(){return new Promise((n,r)=>{const o=Object.assign({"/public/posts/demo.md":__vite_glob_0_0,"/public/posts/machine learning/key_worlds.md":__vite_glob_0_1,"/public/posts/machine learning/learning_resource_link.md":__vite_glob_0_2,"/public/posts/machine learning/popularity_libraries.md":__vite_glob_0_3,"/public/posts/machine learning/todo.md":__vite_glob_0_4}),t={name:"posts",filePath:"posts",posts:[],children:{}};for(const l in o){const u=l.replace("/public/posts/","").split("/");if(u.length===1)t.posts.push(u[0]);else{let s=t.children,f="posts";for(let p=0;p<u.length-1;p++){const d=u[p];f=`${f}/${d}`,s[d]||(s[d]={name:d,filePath:f,posts:[],children:{}}),p===u.length-2?s[d].posts.push(u[u.length-1]):s=s[d].children}}}const a=l=>Object.values(l.children).map(c=>({...c,children:a(c)}));n({...t,children:a(t)})})}static filterTree(n,r){const o={name:n.name,posts:n.posts.filter(t=>r.some(a=>t.toLowerCase().endsWith(a.toLowerCase()))),children:n.children.map(t=>this.filterTree(t,r))};return o.children=o.children.filter(t=>t.posts.length>0||t.children.length>0),o}static async getLocalDirectoryTree(){try{const n=Object.assign({"/public/posts/demo.md":__vite_glob_2_0,"/public/posts/machine learning/key_worlds.md":__vite_glob_2_1,"/public/posts/machine learning/learning_resource_link.md":__vite_glob_2_2,"/public/posts/machine learning/popularity_libraries.md":__vite_glob_2_3,"/public/posts/machine learning/todo.md":__vite_glob_2_4}),r={name:"posts",filePath:"posts",posts:[],children:{}};for(const t in n){const a=n[t],l=t.replace("/public/posts/",""),c=l.split("/"),{data:u,content:s}=matter$1(a),f={name:c[c.length-1],filePath:`posts/${l}`,lastModified:u.date||new Date().toISOString(),summary:this.generateSummary(s)};if(c.length===1)r.posts.push(f);else{let p=r.children,d="posts";for(let h=0;h<c.length-1;h++){const m=c[h];d=`${d}/${m}`,p[m]||(p[m]={name:m,filePath:d,posts:[],children:{}}),h===c.length-2?p[m].posts.push(f):p=p[m].children}}}const o=t=>Object.values(t.children).map(a=>({...a,children:o(a)}));return{...r,children:o(r)}}catch(n){throw console.error("获取本地目录树失败:",n),new Error("无法获取目录树")}}static generateSummary(n,r=200){let o=n.replace(/#+\s/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_~`]/g,"").replace(/\n/g," ").replace(/\s+/g," ").trim();return o.length>r?o.slice(0,r)+"...":o}static async getLocalDirectoryTree3(){try{const n=Object.assign({"/public/posts/demo.md":__vite_glob_2_0,"/public/posts/machine learning/key_worlds.md":__vite_glob_2_1,"/public/posts/machine learning/learning_resource_link.md":__vite_glob_2_2,"/public/posts/machine learning/popularity_libraries.md":__vite_glob_2_3,"/public/posts/machine learning/todo.md":__vite_glob_2_4}),r={name:"posts",filePath:"posts",posts:[],children:{}};for(const t in n){const a=t.replace("/public/posts/",""),l=a.split("/"),c=n[t],{data:u,content:s}=matter$1(c);if(l.length===1)r.posts.push({name:l[l.length-1],filePath:`posts/${a}`,matter:u,content:s});else{let f=r.children,p="posts";for(let d=0;d<l.length-1;d++){const h=l[d];p=`${p}/${h}`,f[h]||(f[h]={name:h,filePath:p,posts:[],children:{}}),d===l.length-2?f[h].posts.push({name:l[l.length-1],filePath:`posts/${a}`,matter:u,content:s}):f=f[h].children}}}const o=t=>Object.values(t.children).map(a=>({...a,children:o(a)}));return{...r,children:o(r)}}catch(n){throw console.error("获取本地目录树失败:",n),new Error("无法获取目录树")}}}export{PostService as P,commonjsRequire as c,matter$1 as m};
