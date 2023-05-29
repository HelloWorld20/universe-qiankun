const webpack = require('webpack');
const execSync = require('child_process').execSync;
const { getReleaseId } = require('./utils');

// 获取当前最新的一次commit hash
const cmd = 'git log -1 --pretty=format:%h';
const GIT_COMMIT_HASH = (function() {
  let hash = '';
  try {
    hash = execSync(cmd).toString();
  } catch (error) {
    hash = 'no commit yet!'
  }
  return hash;
})();

// 注入环境变量
module.exports = function(env, configs) {
  // const appPkg = require(configs.appPackage) || {};
  // const releaseId = getReleaseId(appPkg);

  return new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env),
      GIT_COMMIT_HASH: JSON.stringify(GIT_COMMIT_HASH),
      // RELEASE: JSON.stringify(releaseId),
    },
  });
};
