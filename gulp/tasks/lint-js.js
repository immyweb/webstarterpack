const gulp              = require('gulp');
const customPlumber     = require('../custom-modules/plumber');
const jshint            = require('gulp-jshint');

// require config
const config            = require('../config');

// Linting JavaScript
gulp.task('lint:js', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(customPlumber('JSHint Error'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail', {
            ignoreWarning: config.jshint.reporterOptions.ignoreWarning,
            ignoreInfo: config.jshint.reporterOptions.ignoreInfo
        }));
});
