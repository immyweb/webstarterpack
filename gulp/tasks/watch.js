const gulp              = require('gulp');

// Watches files for changes
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['lint:js']);
    gulp.watch([
      'app/pages/**/*.+(html|njk)',
      'app/templates/**/*.+(html|njk)',
      'app/data/*.json'
    ], ['nunjucks']);
});
