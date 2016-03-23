/**
 * Created by Adrian Tello on 01.02.16.
 */

module.exports = {
    entry: {
        map: "./src/map.js"
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/web/build'
    }
};