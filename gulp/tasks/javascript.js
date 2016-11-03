const gulp              = require('gulp');
const gutil             = require('gulp-util');
const source            = require('vinyl-source-stream');
const babelify          = require('babelify');
const watchify          = require('watchify');
const exorcist          = require('exorcist');
const browserify        = require('browserify');
const browserSync       = require('browser-sync')


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

// Compile JavaScript
gulp.task('bundleJS', () => {
    return bundle();
});
