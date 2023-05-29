const path = require("path");

// babel转译ES6/7/8、React、jsx
module.exports = function (env, configs) {
  return {
    test: /^(?!.*\.min\.jsx?$).*\.jsx?$/,
    exclude: /node_modules\/(?!@fe\/)/,
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
    ],
  };
};
