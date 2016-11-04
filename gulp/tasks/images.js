// require modules
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// require config
const config = require('../config');

gulp.task('images', () => { // Task here
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe($.newer('dist/images'))
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/images'))
});
