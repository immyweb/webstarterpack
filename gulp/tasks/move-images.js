// require modules
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// require config
const config = require('../config');

gulp.task('move:images', () => { // Task here
    return gulp.src(config.images.src)
        .pipe($.newer(config.images.dest))
        .pipe($.imagemin())
        .pipe(gulp.dest(config.images.dest))
});
