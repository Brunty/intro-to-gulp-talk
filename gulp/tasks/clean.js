var gulp = require('gulp');
var del = require('del');
var config = require('../config');

// Our Default task
gulp.task('clean', function(cb) {
    del([config.paths.output.css + '*'], cb);
});