var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
    ],
  },
  devServer: {
		noInfo: false,
		hot: true,
		inline: true,
    port: 3000,
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
