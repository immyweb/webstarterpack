const gulp              = require('gulp');

// require config
const config = require('../config');

// Copying fonts
gulp.task('move:html', () => {
    return gulp.src(config.html.src)
        .pipe(gulp.dest(config.html.dest));
});
