---
title: '关于模型训练'
description: '本文'
name: ''
category: 'ML'
tags: ['machine learning','model training']
date: '2024/12/18 17:54:10'
published: false
---

## 模型到底是什么

把模型当做一个函数
比如：$y = w_1x_1 + w_2x_2 + \cdots + w_nx_n + b$ 这可以看做一个简单的模型

训练的本质就是对$w_1,w_2,w_3 \cdots  w_n 以及b$的设值和调整过程，使得:

存在这样一组[$w_1,w_2,w_3 \cdots  w_n,b$] 在输入任意特征值[$x_1,x_2 \cdots x_n$] 能满足预测输出y_output 与 标准输出y_stand之间误差达到允许范围: $y_output ≈ y_stand$ （即，使模型达到最佳拟合状态）

7. 训练过程（Training Process）
    1.	初始化模型参数  $\mathbf{\theta} $（随机初始化）。
    2.	前向传播（Forward Pass）：
          •	将输入数据 $ \mathbf{x} $ 输入模型，计算预测值  $\hat{y}$ 。
    3.	计算损失：
          •	使用损失函数  L  计算  $\hat{y}$  和真实值  y  之间的误差。
    4.	反向传播（Backward Pass）：
          •	计算损失函数对参数  $\mathbf{\theta}$  的梯度  $\nabla_{\mathbf{\theta}} L$ 。
    5.	参数更新：
          •	使用优化器根据梯度调整参数  $\mathbf{\theta}$ 。
    6.	重复以上步骤，直至损失函数收敛（达到目标损失值）或达到设定的迭代次数。

