var gulp = require('gulp');
var notify = require('gulp-notify');
var phpspec = require('gulp-phpspec');
var _ = require('lodash');

gulp.task('phpspec', function () {
    gulp.src('phpspec.yml')
        .pipe(phpspec('./vendor/bin/phpspec run', { notify: true, debug: false }))
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