const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 剥离js-in-css到assets/styles / 输出目录中
// 试和生产环境将会带上md5 hash
module.exports = function(env, configs) {
  const disableMD5hash =
    env === 'development' || configs.disableEntryFileMD5Hash;
  return new MiniCssExtractPlugin({
    filename: `[name]${disableMD5hash ? '' : '.[contenthash:10]'}.css`,
  });
};
