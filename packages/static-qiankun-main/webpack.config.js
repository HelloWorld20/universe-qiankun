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
    // devServer: {
    //   proxy: {
    //     "/proxy/lianjia/img": {
    //       target: "https://image1.ljcdn.com/",
    //       pathRewrite: { "^/api": "" },
    //     },
    //   },
    // },
    template: {
      source: path.resolve(__dirname, "src"),
      views: [
        {
          view: "index.html",
          chunks: ["manifest", "vendor", "index"],
        },
      ],
    },
    devServer: {
      port: 3000,
    },
  },
  path.resolve(__dirname, "./config.json")
);
// console.log("最终webpack config", config);
module.exports = config;
