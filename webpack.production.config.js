const CommonWebpack = require('./webpack.common.config');

module.exports = {
  ...CommonWebpack,
  watch: false,
  mode: 'production',
  devtool: false,
};
