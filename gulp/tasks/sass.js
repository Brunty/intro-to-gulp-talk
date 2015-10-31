var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var filter = require('gulp-filter');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var config = require('../config');

// Compiles our SASS into a single, minified file (with sourcemaps if in development)
gulp.task('sass', function () {
    var sassConfig = config.sassConfig;

    return sass(config.paths.assets.sass + 'main.sass', sassConfig)
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(prefix(config.autoPrefixer)) // prefix for browsers
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./', { includeContent: true }))
        .pipe(gulp.dest(config.paths.output.css))
        .pipe(filter('**/*.css'))
        .pipe(notify({ message: 'Sass task complete.' }))
        .pipe(reload({ stream: true }));
});
