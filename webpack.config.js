/**
 * Created by Adrian Tello on 01.02.16.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        map: './src/map.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/web/build'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};