var gulp = require('gulp');

gulp.task('watch-phpspec', function () {
    gulp.watch(['src/**/*.php', 'spec/**/*.php'], ['phpspec']);
});