# 基于uni-app和Vue3的寓教于乐灯谜小程序

扫码查看小程序
![小程序码](./mini-code.jpg)

## 项目结构

```bash
uni-guess-riddle/
├── pages/
│   ├── index/         # 灯谜首页
│   └── game/          # 灯谜乐学
├── static/
│   └── images/        # 静态图片
├── store/             # Pinia状态管理
├── utils/             # 工具函数
└── uni.scss           # 全局样式
```

## 主要功能

### 灯谜模式

- 简单模式
- 普通模式
- 困难模式
- 挑战模式

### 随机题目系统
- 灯谜库包含1000+条谜语，分类丰富

- 每次答题随机抽取题目

### 灯谜回顾