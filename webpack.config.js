
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

var config = {
    "devtool": "cheap-eval-source-map",
    entry: [
        './src/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings:false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;