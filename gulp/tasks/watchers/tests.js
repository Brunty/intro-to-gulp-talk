var gulp = require('gulp');

// Watches PHP Source and Test files for changes and re-runs the phpspec task.
gulp.task('watch:phpspec', function () {
    gulp.watch(['src/**/*.php', 'spec/**/*.php'], ['phpspec']);
});