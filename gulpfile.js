// DEPENDENCIES //
const gulp              = require('gulp');
const runSequence       = require('run-sequence');
const requireDir        = require('require-dir');

requireDir('./gulp/tasks');

// Create local development environment
gulp.task('default', (callback) => {
    runSequence(
        'clean:dev',
        ['lint:js', 'lint:scss'],
        ['sass', 'bundleJS', 'nunjucks'],
        ['browserSync', 'watch'],
        callback
    )
});

// Create/update svg iconfont set
gulp.task('icons', ['iconfont', 'sass']);

// Build prodution version for deployment
gulp.task('build', (callback) => {
    runSequence(
        ['clean:dev', 'clean:dist'],
        ['lint:js', 'lint:scss'],
        ['sass', 'bundleJS', 'nunjucks'],
        ['move:css', 'move:images', 'move:fonts', 'move:js', 'move:html'],
        callback
    )
});
