var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var config = require('../config');

// Compiles our SASS into a single, minified file with sourcemaps if in development
gulp.task('styles', function () {
    var sassConfig = config.sassConfig;

    sassConfig.onError = browsersync.notify;

    return sass(config.paths.assets.sass + 'main.sass', sassConfig)
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(prefix({ browsers: ["last 5 versions", "> 1%", "ie 9", "safari > 6"] })) // prefix for browsers
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('maps', {
            includeContent: true,
            sourceRoot: '../../../' + config.paths.assets.sass
        }))
        .pipe(gulp.dest(config.paths.output.css))
        .pipe(notify({ message: 'Styles task complete.' }))
        .pipe(reload({ stream: true }));
});
