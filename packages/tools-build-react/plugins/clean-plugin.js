const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function() {
  return [
    // 启动构建的时候，删除输出目录
    new CleanWebpackPlugin(),
  ];
};
