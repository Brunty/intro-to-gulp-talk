var gulp = require('gulp');
var config = require('../config');

// Run a different set of tasks if you're in production
var tasks = ['styles'];
if(config.isDevelopment) {
    tasks = ['browser-sync', 'sass', 'watch:sass'];
}

// Our Default task
gulp.task('default', tasks);