const gulp              = require('gulp');
const browserSync       = require('browser-sync');

// Browser Sync
gulp.task('browserSync', () => {
    browserSync.init({
        server: './app'
    });
});
