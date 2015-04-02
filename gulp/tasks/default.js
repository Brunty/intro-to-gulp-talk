var gulp = require('gulp');
var config = require('../config');

// Default tasks are dev tasks
var tasks = ['browser-sync', 'sass', 'watch:sass'];

// in production
if(config.inProduction) {
    tasks = ['sass'];
}

gulp.task('default', tasks);