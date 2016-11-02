// DEPENDENCIES //

const gulp              = require('gulp');
const gutil             = require('gulp-util');
const source            = require('vinyl-source-stream');
const babelify          = require('babelify');
const watchify          = require('watchify');
const exorcist          = require('exorcist');
const browserify        = require('browserify');
const browserSync       = require('browser-sync').create();
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const autoprefixer      = require('gulp-autoprefixer');
const nunjucksRender    = require('gulp-nunjucks-render');
const data              = require('gulp-data');
const iconfont          = require('gulp-iconfont');
const iconfontCSS       = require('gulp-iconfont-css');
const imagemin          = require('gulp-imagemin');
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');
const fs                = require('fs');
const del               = require('del');
const runSequence       = require('run-sequence');

// Settings
const fontName = 'icons';
const runTimestamp = Math.round(Date.now()/1000);
const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// Tasks
gulp.task('iconfont', () => {
    gulp.src(['app/svg/*.svg'])
        .pipe(iconfontCSS({
            fontName: fontName,
            targetPath: '../scss/base/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true,
            // Remove woff2 if you get an ext error on compile
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001,
            timestamp: runTimestamp
        }))
        .pipe(gulp.dest('app/fonts'))
});



// Watchify args contains necessary cache options to achieve fast incremental bundles.
// See watchify readme for details. Adding debug true for source-map generation.
watchify.args.debug = true;

const bundler = watchify(browserify('./app/js/app.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
    sourceMapRelative: 'app/js',
    presets: ['es2015']
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {

    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', (err) => {
            gutil.log(err.message);
            browserSync.notify('Browserify Error!');
            this.emit('end');
        })
        .pipe(exorcist('app/js/dist/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js/dist'))
        .pipe(browserSync.stream({once: true}));
}

gulp.task('bundle', () => {
    return bundle();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src('app/scss/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || "Error running Gulp", message: "Error: <%= error.message %>",
        })
    });
}

// nunjucks templating
gulp.task('nunjucks', () => {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|njk)')
        .pipe(customPlumber('Error Running Nunjucks'))
        .pipe(data(() => {
            return JSON.parse(fs.readFileSync('./app/data/data.json'))
        }))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
});

gulp.task('clean:dev', () => {
    return del.sync([
        'app/css',
        'app/*.html'
    ]);
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: './app'
    });
});

gulp.task('watch', () => {
    gulp.watch('app/templates/**/*.+(html|njk)', ['nunjucks']);
    gulp.watch('app/pages/**/*.+(html|njk)', ['nunjucks']);
    gulp.watch('app/data/*.json', ['nunjucks']);
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', (callback) => {
    runSequence('clean:dev',
        ['sass', 'nunjucks'],
        ['browserSync', 'watch'],
        callback
    )
});

gulp.task('icons', ['iconfont', 'sass']);
