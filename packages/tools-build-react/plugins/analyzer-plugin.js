const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function () {
  if (process.env.ANALASY) {
    return [new BundleAnalyzerPlugin()]
  }
  return []
};
