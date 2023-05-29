const fs = require("fs");
const TerserPlugin = require("terser-webpack-plugin");

function loadJSON(filename) {
  try {
    const content = fs.readFileSync(filename, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.warn("loadJson错误", error);
    return {};
  }
}

const devServerPort = 3000;

module.exports = (rawConfigs, staticConfigsPath) => {
  const env = process.env.NODE_ENV;
  if (!env) throw new Error("找不到环境变量");
  let staticConfigs = {};
  if (staticConfigsPath) {
    staticConfigs = loadJSON(staticConfigsPath);
  }

  const configs = {
    entry: rawConfigs.entry,
    distDir: rawConfigs.distDir,
    srcDir: rawConfigs.srcDir,
    resolve: Object.assign(
      {
        extensions: [],
        alias: [],
        template: rawConfigs.template,
      },
      rawConfigs.resolve
    ),
    loaders: rawConfigs.loaders || [],
    plugins: rawConfigs.plugins || [],
    ...staticConfigs,
    devServer: Object.assign(
      {
        hot: true,
        port: devServerPort,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Content-Type,Content-Length,Accept,X-Requested-With",
          "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        },
        historyApiFallback: true
      },
      rawConfigs.devServer
    ),
  };

  const isDev = env === "development";
  return {
    mode: isDev ? "development" : "production",
    entry: configs.entry,
    output: {
      path: configs.distDir,
      // libraryTarget: 'umd',
      // globalObject: 'window',
      // 资源发布的路径
      publicPath: isDev ? '/' : `${configs.cdnPrefix || "/"}`,
      filename: `[name].[hash:10].js`,
    },
    resolve: {
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".coffee",
        ".json",
        ...configs.resolve.extensions,
      ],
      alias: configs.resolve.alias,
    },
    optimization: {
      minimize: isDev ? false : true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: { output: { comments: false } },
        }),
      ],
      // splitChunks: {
      //   cacheGroups: configs.shouldSplitVendorChunk
      //     ? {
      //         vendor: {
      //           chunks: 'initial',
      //           test: /[\\/]node_modules[\\/](?!@fe[\\/])/,
      //           name: 'vendor',
      //           enforce: true,
      //           reuseExistingChunk: true,
      //         },
      //       }
      //     : {},
      // },
      // runtimeChunk: !configs.disableManifestChunk && { name: 'manifest' },
    },

    module: {
      // 各种默认loader配置
      // 结合其他业务房配置的loader
      rules: [].concat(require("./loaders")(env, configs), configs.loaders),
    },

    plugins: [].concat(require("./plugins")(env, configs), configs.plugins),

    devServer: configs.devServer,
  };
};
