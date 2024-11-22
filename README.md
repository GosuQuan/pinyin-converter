# 汉字转拼音工具 (Chinese to Pinyin Converter)

一个简单高效的在线汉字转拼音工具，基于 React 和 Ant Design 构建。

## 功能特点

- ✨ 实时转换：即时将输入的汉字转换为带声调的拼音
- 🎨 明暗主题：支持明亮和暗黑两种主题模式
- 📋 一键复制：便捷的拼音复制功能
- 🌐 保留非汉字：自动保留数字、标点和英文字符
- 💻 响应式设计：完美适配各种屏幕尺寸

## 技术栈

- React 18
- Ant Design 5
- pinyin-pro

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/yourusername/pinyin-converter.git
cd pinyin-converter
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 打开浏览器访问 http://localhost:3000

## 依赖版本

```json
{
  "dependencies": {
    "@ant-design/icons": "^5.2.6",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.11.1",
    "pinyin-pro": "^3.17.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

## 项目结构

```
pinyin-converter/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js          # 主应用组件
│   ├── App.css         # 样式文件
│   └── index.js        # 入口文件
├── package.json
└── README.md
```

## 使用说明

1. 在左侧输入框中输入中文文本
2. 转换后的拼音将实时显示在右侧
3. 点击右侧"复制"按钮可复制转换结果
4. 使用右上角的主题切换开关切换明暗主题

## 开发命令

- `npm start` - 启动开发服务器
- `npm test` - 运行测试
- `npm run build` - 构建生产版本
- `npm run eject` - 暴露配置文件（⚠️ 不可逆操作）

## 注意事项

- 建议使用现代浏览器以获得最佳体验
- 输入框支持粘贴操作
- 转换结果自动保留原文本的换行和空格

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

MIT License - 详见 LICENSE 文件
