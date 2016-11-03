const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const $                 = require('gulp-load-plugins')();
const customPlumber     = require('../custom-modules/plumber');
const fs                = require('fs');

// Templating
gulp.task('nunjucks', () => {
    return gulp.src('app/pages/**/*.+(html|njk)')
        .pipe(customPlumber('Error Running Nunjucks'))
        .pipe($.data(() => {
            return JSON.parse(fs.readFileSync('./app/data/data.json'))
        }))
        .pipe($.nunjucksRender({
            path: ['app/templates']
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
});
