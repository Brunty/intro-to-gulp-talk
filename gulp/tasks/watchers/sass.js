var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../config');

// Watches styles (SCSS and SASS files) for changes and re-runs the styles task.
gulp.task('watch:sass', function () {
    gulp.watch([config.paths.assets.sass + '**/*.scss', config.paths.assets.sass + '**/*.sass'], ['sass']).on('error', function () {
        gutil.log(gutil.colors.red(err));
    });
});