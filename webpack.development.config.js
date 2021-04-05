const CommonWebpack = require('./webpack.common.config');

module.exports = {
  ...CommonWebpack,
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
};
