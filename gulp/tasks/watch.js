const gulp              = require('gulp');

// require config
const config            = require('../config');

// Watches files for changes
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', ['sass', 'lint:scss']);
    gulp.watch('app/js/**/*.js', ['lint:js']);
    gulp.watch([
      'app/pages/**/*.+(html|njk)',
      'app/templates/**/*.+(html|njk)',
      'app/data/*.json'
    ], ['nunjucks']);
});
