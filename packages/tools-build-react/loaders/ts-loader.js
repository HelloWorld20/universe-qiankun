const tsImportPluginFactory = require("ts-import-plugin");
console.log('%c [ tsImportPluginFactory ]-2', 'font-size:13px; background:pink; color:#bf2c9f;', tsImportPluginFactory)

// 编译typescript
module.exports = function (env, configs) {
  return {
    test: /\.tsx?$/,
    // exclude: /node_modules\/(?!@fe\/)/,
    include: [
      configs.srcDir,
      // path.resolve(configs.srcDir, '../node_modules/@fe'),
      // ...configs.loaderInclude,
    ],
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
  };
};
