var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var filter = require('gulp-filter');
var browsersync = require('browser-sync');
var config = require('../config');

gulp.task('sass', function () {
    var sassConfig = config.sassConfig;

    return sass(config.paths.assets.sass + 'main.sass', sassConfig)
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./', { includeContent: true }))
        .pipe(gulp.dest(config.paths.output.css))
        .pipe(filter('**/*.css'))
        .pipe(notify({ message: 'Sass task complete.' }))
        .pipe(browsersync.reload({ stream: true }));
});
