/**
 * Created by Adrian Tello on 01.02.16.
 */

module.exports = {
    entry: {
        map: "./src/map.js"
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
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/web/build'
    }
};