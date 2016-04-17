/**
 * Created by tello on 02/04/2016.
 */
var del = require('del');
var gulp = require('gulp');
var hexagonalLayout = require('./buildsrc/sprite-generator/layout/hexagonal');
var jsonSpritesheet = require('./buildsrc/sprite-generator/stylesheet/json');
var nsg = require('node-sprite-generator');
var pngmin = require('gulp-pngmin');
var svg2png = require('gulp-svg2png');
var through2 = require('through2');
var webpack = require('webpack-stream');

gulp.task('default', ['build']);

///////////////////////////////////////////////////////
// Source code
///////////////////////////////////////////////////////
gulp.task('build', ['build.clean', 'build.source', 'tiles']);
gulp.task('build.clean', function(){
    return del([
        './web/build/'
    ]);
});
gulp.task('build.source', function(){
    return gulp.src('src/map.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('web/build'));
});

///////////////////////////////////////////////////////
// Tiles
///////////////////////////////////////////////////////
gulp.task('tiles', ['tiles.clean', 'tiles.convert', 'tiles.sprite']);
gulp.task('tiles.clean', function () {
    return del([
        './web/build/tiles/'
    ]);
});

gulp.task('tiles.convert', ['tiles.clean'],function () {
    return gulp.src('./src/map/tiles/*.svg')
        .pipe(svg2png(0.285714286)) //Scaling factor to get 140px width
        .pipe(pngmin())
        .pipe(gulp.dest('./web/build/tiles/'));
});

gulp.task('tiles.sprite', ['tiles.clean', 'tiles.convert'], function (cb) {
    var files = [];

    return gulp
        .src('web/build/tiles/*.png')
        .pipe(through2(
            {objectMode: true},
            function (chunk, enc, cb) {
                files.push(chunk.path);
                cb(null, chunk)
            },
            function (cb) {
                nsg({
                    src: files,
                    layout: hexagonalLayout,
                    spritePath: 'web/build/tiles/sprites/tilessprite.png',
                    stylesheet: jsonSpritesheet,
                    stylesheetPath: 'web/build/tiles/sprites/tilessprite.json'
                }, function (err) {
                    cb(err);
                });
            }
        ));
});