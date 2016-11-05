const gulp              = require('gulp');
const del               = require('del');

// Clean dev environment
gulp.task('clean:dev', () => {
    return del.sync([
        'app/css',
        'app/*.html'
    ]);
});

// Clean dist folder
gulp.task('clean:dist', () => {
    return del.sync(['dist']);
});
