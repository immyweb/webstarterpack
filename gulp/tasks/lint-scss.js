const gulp              = require('gulp');
const customPlumber     = require('../custom-modules/plumber');
const sassLint          = require('gulp-sass-lint');

// require config
const config            = require('../config');

// Linting Sass files
gulp.task('lint:scss', () => {
    return gulp.src(config.sass.src)
        .pipe(sassLint({
            config: config.scsslint.config
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});
