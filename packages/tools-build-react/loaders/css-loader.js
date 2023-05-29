const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, configs) {
  const isDev = env === 'development';
  return {
    test: /\.css$/,
    use: [
      // 开发环境追求效率直接用js加载样式，生产环境则需要抽取css文件进行外部加载
      isDev
        ? 'style-loader'
        : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 样式文件内部的资源路径不使用output.publicPath，直接使用当前css所在地址即可
              publicPath: '',
            },
          },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, '../postcss.config.js'),
            ctx: { configs },
          },
        },
      },
    ],
  };
};
