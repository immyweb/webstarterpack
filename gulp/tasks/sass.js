// require modules
const gulp              = require('gulp');
const $                 = require('gulp-load-plugins')();
const browserSync       = require('browser-sync');

// require custom modules
const customPlumber     = require('../custom-modules/plumber');

// require config
const config            = require('../config');

// Compiles Sass to CSS
gulp.task('sass', () => {
    return gulp.src(config.sass.src)
        .pipe(customPlumber('Error Running Sass'))
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.sass.sassOptions))
        .pipe($.autoprefixer(config.sass.autoprefixerOptions))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browserSync.stream({once: true}));
});
