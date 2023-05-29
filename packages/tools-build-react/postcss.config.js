module.exports = function({ options }) {
  return {
    plugins: [
      require('postcss-import')({ path: [options.configs.srcDir] }),
      require('postcss-mixins')(),
      require('postcss-each')(),
      require('postcss-css-variables')(),
      require('postcss-cssnext')({
        features: { customProperties: false },
        warnForDuplicates: false,
      }),
      require('postcss-reporter')({ clearMessages: true }),
      require('cssnano')({
        colormin: { legacy: true },
        core: false,
        zindex: false,
        reduceIdents: false,
        mergeIdents: false,
        discardUnused: { keyframes: false },
      }),
    ],
  };
};
