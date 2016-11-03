// require modules
const gulp              = require('gulp');
const iconfont          = require('gulp-iconfont');
const iconfontCSS       = require('gulp-iconfont-css');

// require custom modules
const customPlumber     = require('../custom-modules/plumber');

// require config
const config            = require('../config');

const runTimestamp = Math.round(Date.now()/1000);

// Generate svg icon fonts
gulp.task('iconfont', () => {
    gulp.src(config.iconfont.src)
        .pipe(customPlumber('Error generating icons'))
        .pipe(iconfontCSS({
            fontName: config.iconfont.fontName,
            targetPath: config.iconfont.targetPath,
            fontPath: config.iconfont.fontPath
        }))
        .pipe(iconfont({
            fontName: config.iconfont.fontName,
            prependUnicode: config.iconfont.prependUnicode,
            formats: config.iconfont.formats,
            normalize: config.iconfont.normalize,
            fontHeight: config.iconfont.fontHeight,
            timestamp: runTimestamp
        }))
        .pipe(gulp.dest(config.iconfont.dest))
});
