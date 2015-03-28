var gutil = require('gulp-util');

/*
 Differentiate dev to production via the --prod flag
 Running without the flag will assume development mode and tasks can use the isDevelopment variable to check this
 */
var isDevelopment = true;
var sassStyle = 'compact';
var sourceMap = true;

if (gutil.env.prod === true) {
    sassStyle = 'compressed';
    isDevelopment = false;
    sourceMap = false;
}

var sassPath = 'resources/sass/';
var cssPath = 'public/css/';

module.exports = {
    isDevelopment: isDevelopment,
    siteUrl: 'http://gulp.talk',
    paths: {
        assets: {
            sass: sassPath
        },
        output: {
            css: cssPath
        }
    },
    sassConfig: {
        sourcemap: sourceMap,
        bundleExec: true,
        loadPath: sassPath,
        style: sassStyle
    }
};