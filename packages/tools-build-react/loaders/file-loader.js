// 文件拷贝
module.exports = function() {
  return [
    // 处理字体资源，小于10k会被转成base64 code
    {
      test: /\.(eot|ttf|woff)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:10].[ext]',
            limit: 10 * 1024,
          },
        },
      ],
    },

    // 处理音频资源
    {
      test: /\.(wav|mp3)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:10].[ext]',
          },
        },
      ],
    },

    // 处理视频资源
    {
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:10].[ext]',
          },
        },
      ],
    },
  ];
};
