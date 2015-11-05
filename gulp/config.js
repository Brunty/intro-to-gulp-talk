var gutil = require('gulp-util');

/*
 Differentiate dev to production via the --prod flag
 Running without the flag will assume development mode and tasks can use the isDevelopment variable to check this
 */
var inProduction = (gutil.env.prod === true);
var inDevelopment = !inProduction;
var hasSourcemap = inDevelopment;
var isVerbose = (gutil.env.verbose === true);

var resourcesBasePath = 'resources/';
var outputBasePath = 'public/';

module.exports = {
    inDevelopment: inDevelopment,
    inProduction: inProduction,
    siteUrl: 'http://gulp.talk',
    paths: {
        assets: {
            sass: resourcesBasePath + 'sass/'
        },
        output: {
            css: outputBasePath + 'css/'
        }
    },
    sassConfig: {
        sourcemap: hasSourcemap,
        bundleExec: true,
        loadPath: [
            resourcesBasePath + 'sass/'
        ],
        style: 'compressed',
        verbose: isVerbose
    },
    autoPrefixer: {
        browsers: ["last 5 versions", "> 1%", "ie 9", "safari > 6"]
    }
};
