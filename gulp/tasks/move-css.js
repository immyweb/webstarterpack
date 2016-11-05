const gulp = require('gulp');
const cssnano = require('gulp-cssnano');

// require config
const config = require('../config');

// Copying compiled CSS to dist
gulp.task('move:css', () => {
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});
