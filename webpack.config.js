const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = require('./config');
const PORT = process.env.PORT || 8080;

module.exports = {
    entry: './src/app/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: {
            index: 'index.html',
            rewrites: [{ from: /./, to: '/index.html' }]
        },
        port: PORT,
        publicPath: config.BASE_NAME,
        watchOptions: {
            poll: true
        }
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: config.BASE_NAME
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname),
            app: path.resolve(__dirname, 'src/app/'),
            src: path.resolve(__dirname, 'src/'),
            styles: path.resolve(__dirname, 'src/styles/')
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(gif|jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([{ from: 'src/static', to: './' }]),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/templates/index.html',
            title: config.APP_TITLE,
            basename: config.BASE_NAME
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
};
