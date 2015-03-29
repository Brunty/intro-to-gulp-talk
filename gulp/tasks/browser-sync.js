var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../config');

// Starts browser-sync if we're in development mode
gulp.task('browser-sync', function () {
    if (config.isDevelopment) {
        browsersync({
            proxy: config.siteUrl
        });
    }
});