/**
 * Created by tello on 02/04/2016.
 */
var del = require('del');
var gulp = require('gulp');
var svg2png = require('gulp-svg2png');
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
gulp.task('tiles', ['tiles.clean', 'tiles.convert']);
gulp.task('tiles.clean', function () {
    return del([
        './web/build/tiles/'
    ]);
});

gulp.task('tiles.convert', function () {
    gulp.src('./src/map/tiles/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./web/build/tiles/'));
});