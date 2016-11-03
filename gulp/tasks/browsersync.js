const gulp              = require('gulp');
const browserSync       = require('browser-sync').create();

// Browser Sync
gulp.task('browserSync', () => {
    browserSync.init({
        server: './app'
    });
});
