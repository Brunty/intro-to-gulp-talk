var gutil = require('gulp-util');

/*
 Differentiate dev to production via the --prod flag
 Running without the flag will assume development mode and tasks can use the isDevelopment variable to check this
 */
var inDevelopment = ! (gutil.env.prod === true); // note the !
var inProduction = (gutil.env.prod === true);
var sourceMap = ! (gutil.env.prod === true); // note the !
var verboseMode = (gutil.env.verbose === true);

var resourcesBasePath = 'resources/';
var outputBasePath = 'public/';
var bowerBasePath = 'bower_components/';
module.exports = {
    inDevelopment: inDevelopment,
    inProduction: inProduction,
    siteUrl: 'http://gulp.talk',
    paths: {
        bower: bowerBasePath,
        assets: {
            sass: resourcesBasePath + 'sass/'
        },
        output: {
            css: outputBasePath + 'css/'
        }
    },
    sassConfig: {
        sourcemap: sourceMap,
        bundleExec: true,
        loadPath: [
            resourcesBasePath + 'sass/'
        ],
        style: 'compressed',
        verbose: verboseMode
    },
    autoPrefixer: {
        browsers: ["last 5 versions", "> 1%", "ie 9", "safari > 6"]
    }
};
