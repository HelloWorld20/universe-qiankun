/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-06-09 17:08:54
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

// 我的demo
// webpack/container/reference/utils_web_app 实际有的值
// webpack/container/remote/utils_web_app/request 读取了，说明读取错了。

// 好的demo
// webpack/container/reference/lib-app

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    clean: true,
    filename: "[name].[hash:8].js",
    publicPath: "http://localhost:8081/",
    // publicPath:
    //   "https://test-1258538316.cos.ap-guangzhou.myqcloud.com/module-federation/static-mf-app/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.tsx?$/,
        // exclude: /node_modules\/(?!@fe\/)/,
        // include: [
        //   configs.srcDir,
        //   // path.resolve(configs.srcDir, '../node_modules/@fe'),
        //   // ...configs.loaderInclude,
        // ],
        use: [
          "cache-loader",
          "thread-loader",
          "babel-loader",
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     cwd: path.resolve(__dirname, '../'),
          //     cacheDirectory: true,
          //   },
          // },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
              getCustomTransformers() {
                return {
                  before: [tsImportPluginFactory({ style: true })],
                };
              },
              compilerOptions: {
                module: "es2015",
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "child2_app",
      filename: "remoteEntry.js", // 导出的文件名
      remotes: {
        utils_web_app: "utils_web_app@http://localhost:8080/remoteEntry.js",
        // utils_web_app:
        //   "utils_web_app@https://test-1258538316.cos.ap-guangzhou.myqcloud.com/module-federation/ww-utils-web/remoteEntry.js",
      },
      //   依赖的模块
      //   remotes: {
      //     "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
      //   },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
