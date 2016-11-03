const gulp              = require('gulp');
const iconfont          = require('gulp-iconfont');
const iconfontCSS       = require('gulp-iconfont-css');

const fontName = 'icons';
const runTimestamp = Math.round(Date.now()/1000);

// Generate svg icon fonts
gulp.task('iconfont', () => {
    gulp.src(['app/svg/*.svg'])
        .pipe(iconfontCSS({
            fontName: fontName,
            targetPath: '../scss/base/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true,
            // Remove woff2 if you get an ext error on compile
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001,
            timestamp: runTimestamp
        }))
        .pipe(gulp.dest('app/fonts'))
});
