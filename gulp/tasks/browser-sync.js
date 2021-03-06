var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../config');

// Starts browser-sync if we're in development mode
gulp.task('sync:browser', function () {
    if (config.inDevelopment) {
        browsersync({
            proxy: config.siteUrl
        });
    }
});