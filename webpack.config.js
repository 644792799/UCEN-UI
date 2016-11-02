var path  = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: path.resolve(__dirname, 'app/demo.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
