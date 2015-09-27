var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var entries = ['./src/main'];

var output = {
  filename: 'bundle.min.js',
  path: path.join(__dirname, 'dist/'),
  publicPath: '/'
};

var styleLoader = {
  test: /\.less$/,
  loaders: [
    "style",
    "css?modules&importLoaders=1",
    "less"
  ]
};

var postcss = function() {
  return [autoprefixer];
}

var development = {
  // Create Sourcemaps for the bundle
  devtool: 'source-map',

  entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
    ].concat(entries),

  output: output,

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: path.join(__dirname, '/src/js'),
        loaders: ['babel']
      },
      styleLoader
    ],
    postcss: postcss
  },
  stats: {
    errorDetails: true
  }
};

var build = {
  entry: entries,
  output: output,
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true}),
    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: path.join(__dirname, '/src/js'),
        loaders: ['babel']
      },
      styleLoader
    ],
    postcss: postcss
  },
  stats: {
    errorDetails: true
  }
}

module.exports = {
  build: build,
  development: development
};
