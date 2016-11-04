// require modules
const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const $                 = require('gulp-load-plugins')();
const fs                = require('fs');

// require custom modules
const customPlumber     = require('../custom-modules/plumber');

// require config
const config            = require('../config');

// Templating
gulp.task('nunjucks', () => {
    return gulp.src(config.nunjucks.src)
        .pipe(customPlumber('Error Running Nunjucks'))
        .pipe($.data(() => {
            return JSON.parse(fs.readFileSync(config.nunjucks.data))
        }))
        .pipe($.nunjucksRender({
            path: config.nunjucks.templates
        }))
        .pipe(gulp.dest(config.nunjucks.dest))
        .pipe(browserSync.stream({once: true}));
});
