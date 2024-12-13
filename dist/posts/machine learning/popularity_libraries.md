---
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
