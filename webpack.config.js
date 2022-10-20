const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const sass = require('sass');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
        main: './javascript/script.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        //закомментить, чтобы css не минифицировать
        // new CssMinimizerWebpackPlugin(),
        // new TerserWebpackPlugin()
        //закомментить, чтобы css не минифицировать
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
              }
        ]
    }
}