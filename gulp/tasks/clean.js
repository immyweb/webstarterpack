const gulp              = require('gulp');
const del               = require('del');

// Clean
gulp.task('clean:dev', () => {
    return del.sync([
        'app/css',
        'app/*.html'
    ]);
});
