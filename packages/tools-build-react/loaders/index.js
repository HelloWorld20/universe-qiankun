module.exports = function(env, configs) {
  return [
    require('./ts-loader')(env, configs),
    require('./babel-loader')(env, configs),
    require('./css-loader')(env, configs),
    require('./less-loader')(env, configs),
    require('./image-loader')(env, configs),
    ...require('./file-loader')(env, configs),
    require('./html-loader')(env, configs),
  ];
};
