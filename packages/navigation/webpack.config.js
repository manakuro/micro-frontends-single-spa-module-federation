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
    publicPath: 'http://localhost:3001/',
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
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'navigation',
      library: { type: 'var', name: 'navigation' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        Header: './src/Header',
        Footer: './src/Footer',
      },
      shared: ['react', 'react-dom', 'single-spa-react'],
    }),
  ],
}
