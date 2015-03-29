var gulp = require('gulp');

// Runs our phpspec task then starts the watcher
gulp.task('tests', ['phpspec', 'watch:phpspec']);
