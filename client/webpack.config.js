const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');
const {InjectManifest} = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        index: {
            import:'./src/index.js',
            dependOn: 'shared',
        },
        css: {
            import:'./src/index.css',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                react: { test: /[\\/]node_modules[\\/]((react).*)[\\/]/, name: "react", chunks: "all"},
                //commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
            }
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader?name=./images[name].[ext]'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html'
    }),
    new InjectManifest({
        swSrc: './src/service-worker.js',
        swDest: 'service-worker.js'
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: "static"
    })
],
};