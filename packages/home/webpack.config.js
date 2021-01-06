const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    contentBase: outputPath,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-typescript')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home' },
      filename: 'remoteEntry.js',
      remotes: {
        'home-nav': 'navigation',
        'home-body': 'body',
      },
      exposes: {},
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
