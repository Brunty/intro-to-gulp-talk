var gulp = require('gulp');
var gutil = require('gulp-util');

// Hello world!
gulp.task('hello', function () {
    gutil.log(gutil.colors.green('Hello world!'));
});