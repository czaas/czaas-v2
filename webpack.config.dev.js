var path = require('path');
var webpack = require('webpack');

module.exports = {

  // When in development this should be on
  // devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // When in production this should be on
    // new webpack.DefinePlugin({
    //  'process.env': {
    //    'NODE_ENV': JSON.stringify('production')
    //  }
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};