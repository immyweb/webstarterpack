const gulp              = require('gulp');
const $                 = require('gulp-load-plugins')();
const customPlumber     = require('../custom-modules/plumber');
const browserSync       = require('browser-sync');

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// Compiles Sass to CSS
gulp.task('sass', () => {
    return gulp.src('app/scss/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions))
        .pipe($.autoprefixer(autoprefixerOptions))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});
