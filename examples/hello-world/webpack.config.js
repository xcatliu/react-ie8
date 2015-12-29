const Es3ifyWebpackPlugin = require('../../es3ify-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new Es3ifyWebpackPlugin(),
  ],
};
