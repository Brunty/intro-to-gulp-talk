var gulp        = require('gulp-help')(require('gulp'));
var gutil       = require('gulp-util');
var sass        = require('gulp-ruby-sass');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var notify      = require('gulp-notify');
var phpspec     = require('gulp-phpspec');
var _           = require('lodash');
var browsersync = require('browser-sync');
var reload      = browsersync.reload;

/*
    Differentiate dev to production via the --dev flag
 */
var isProduction = true;
var sassStyle = 'compressed';
var sourceMap = false;

if (gutil.env.dev === true) {
    isProduction = false;
    sassStyle = 'compact';
    sourceMap = true;
}

/*
    Some configuration objects
*/
var paths = {
    assets: {
        sass: 'resources/sass/'
    },
    output: {
        css: 'public/css/'
    }
};

var sassConfig = {
    sourcemap: sourceMap,
    bundleExec: true,
    loadPath: paths.assets.sass,
    style: sassStyle
};

gulp.task('default', 'Starts browser sync, runs our styles task, then watches SASS files for changes.', ['browser-sync', 'styles', 'watch-styles']);
gulp.task('tests', 'Runs our phpspec task, then watches PHP files for changes.', ['phpspec', 'watch-phpspec']);

gulp.task('browser-sync', 'Starts browser sync as a proxy to http://gulp.talk', function() {
    // if we're not in production, start browsersync
    if( ! isProduction) {
        browsersync({
            proxy: 'gulp.talk'
        });
    }
});

gulp.task('hello', 'Hello world!', function() {
   gutil.log(gutil.colors.green('Hello world!'));
});

gulp.task('styles', 'Compiles SASS files into a single CSS file.', function () {
    return sass(paths.assets.sass + 'main.scss', sassConfig)
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(prefix({ browsers: ["last 5 versions", "> 1%", "ie 9", "safari > 6"]})) // prefix for browsers
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('maps', {
            includeContent: true,
            sourceRoot: '../../../' + paths.assets.sass
        }))
        .pipe(gulp.dest(paths.output.css))
        .pipe(notify({message: 'Styles task complete.'}))
        .pipe(reload({stream: true}));
});

gulp.task('watch-styles', 'Watches SASS files for changes then runs styles task on them.', function () {
    gulp.watch([paths.assets.sass + '**/*.scss', paths.assets.sass + '**/*.sass'], ['styles']).on('error', function() {
        gutil.log(gutil.colors.red(err));
    });
});

gulp.task('watch-phpspec', 'Watches PHP files in src/ and spec/ for changes and runs phpspec.', function () {
    gulp.watch(['src/**/*.php', 'spec/**/*.php'], ['phpspec']);
});

gulp.task('phpspec', 'Run our phpspec tests.', function () {
    gulp.src('phpspec.yml')
        .pipe(phpspec('./vendor/bin/phpspec run', {notify: true, debug: false}))
        .on('error', notify.onError(testNotification('fail', 'phpspec')))
        .pipe(notify(testNotification('pass', 'phpspec')));
});

function testNotification(status, pluginName, override) {
    var options = {
        title: ( status == 'pass' ) ? 'Tests Passed' : 'Tests Failed',
        message: ( status == 'pass' ) ? '\n\nAll tests have passed!\n\n' : '\n\nOne or more tests failed...\n\n',
        icon: __dirname + '/node_modules/gulp-' + pluginName + '/assets/test-' + status + '.png'
    };
    options = _.merge(options, override);
    return options;
}