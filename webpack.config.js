const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PORT = 8080;

module.exports = {
  entry: './src/app/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: {
      index: 'index.html',
      rewrites: [{ from: /./, to: '/index.html' }]
    },
    port: PORT
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname),
      app: path.resolve(__dirname, 'src/app/'),
      src: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin([{ from: 'src/static', to: './' }]),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/templates/index.html',
      title: ''
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
};
