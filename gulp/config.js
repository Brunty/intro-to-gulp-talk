var gutil = require('gulp-util');

/*
 Differentiate dev to production via the --prod flag
 Running without the flag will assume development mode and tasks can use the isDevelopment variable to check this
 */
var isDevelopment = true;
var sassStyle = 'compressed';
var sourceMap = true;

if (gutil.env.prod === true) {
    isDevelopment = false;
    sourceMap = false;
}

var verboseMode = (gutil.env.verbose === true);

var resourcesBasePath = 'resources/';
var sassPath = resourcesBasePath + 'sass/';
var publicBasePath = 'public/';
var cssPath = publicBasePath + 'css/';

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
        style: sassStyle,
        verbose: verboseMode
    }
};
