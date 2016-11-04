const gulp              = require('gulp');
const uglify            = require('gulp-uglify');

// require config
const config = require('../config');

// Compress JS and move to dist folder
gulp.task('move:js', () => {
    return gulp.src('app/jscomp/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
