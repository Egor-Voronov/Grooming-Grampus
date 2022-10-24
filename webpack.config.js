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
        //закомментить, чтобы css минифицировать
        // new CssMinimizerWebpackPlugin(),
        // new TerserWebpackPlugin()
        //закомментить, чтобы css минифицировать
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: 'asset/resource',
                generator: {
                filename: 'assets/fonts/[name][ext]'
                } 
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/img/[name][ext]'
                } 
            },
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