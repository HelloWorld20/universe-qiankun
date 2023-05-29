# 基于 webpack4 的 React 打包工具

该模块导出一个方法，根据入参生成一份能打包 React 项目的 webpack4 的配置文件

## 使用方法

1. 在另外的静态（static-）package 里安装此 package

   pnpm install @ww/tools-build-react -r --filter @ww/static-apart-radar

2. 在静态 package 里新建文件`webpack.config.js`

3. 导入该模块导出的方法，即可生成一份 webpack 配置

```javascript
const { webpackConfig } = require("@ww/tools-build-react");
const path = require("path");

const config = webpackConfig(
  {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    srcDir: path.resolve(__dirname, "src"),
    distDir: path.resolve(__dirname, "dist"),
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "./src/components"),
        "@/datas": path.resolve(__dirname, "./src/datas"),
      },
    },
    template: {
      source: path.resolve(__dirname, "src"),
      views: [
        {
          view: "index.html",
          chunks: ["manifest", "vendor", "index"],
        },
      ],
    },
  },
  path.resolve(__dirname, "./config.json")
);
// console.log("最终webpack config", config);
module.exports = config;
```

4. 在静态 package 的 package.json script 参数里加上两条命令即可使用

```json
"scripts": {
    "dev": "cross-env NODE_ENV=development  webpack-dev-server --config webpack.config.js",
    "build": "cross-env NODE_ENV=development  webpack --config webpack.config.js"
}
```

## todo

- 也导出 webpack 本身。省得静态 package 还要安装 webpack
- 目前各种依赖需要去静态package里安装，不合理
- webpack.js改为ts，获得参数提醒能力
