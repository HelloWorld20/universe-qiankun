/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-06-09 17:08:54
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

const { ModuleFederationPlugin } = require("webpack").container;
const pkg = require("./package.json");

module.exports = {
  mode: "development",

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
        use: [
          "cache-loader",
          "thread-loader",
          "babel-loader",
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
  plugins: [
    new ModuleFederationPlugin({
      name: "utils_web_app",
      filename: "remoteEntry.js", // 导出的文件名
      exposes: {
        "./loadScript": "./src/load-script.ts", // 导出的模块名: 导出的文件路径
        "./request": "./src/request.ts",
      },
      //   依赖的模块
      //   remotes: {
      //     "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
      //   },
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
  ],
};
