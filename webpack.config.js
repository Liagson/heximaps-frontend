/**
 * Created by Adrian Tello on 01.02.16.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var config = {
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
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.fs$/,
                loader: 'raw'
            },
            {
                test: /\.vs$/,
                loader: 'raw'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/web/build'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development') //production or development
            }
        })
    ]
};

var PROD = (process.env.NODE_ENV === 'production');
if(PROD){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        })
    );
}

module.exports = config;