const config = {

    html: {
        src: 'app/*.html',
        dest: 'dist'
    },

    fonts: {
        src: 'app/fonts/**/*',
        dest: 'dist/fonts'
    },

    iconfont: {
        src: ['app/svg/*.svg'],
        dest: 'app/fonts',
        fontName: 'icons',
        targetPath: '../scss/base/_icons.scss',
        fontPath: '../fonts/',
        prependUnicode: true,
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        normalize: true,
        fontHeight: 1001
    },

    images: {
        src: 'app/images/**/*.+(png|jpg|jpeg|gif|svg)',
        dest: 'dist/images'
    },

    js: {
        src: 'app/js/app.js',
        dest: 'app/jscomp/',
        babelOptions: {
            sourceMapRelative: 'app/js',
            presets: ['es2015']
        }
    },

    jshint: {
        reporterOptions: {
            ignoreWarning: true,
            ignoreInfo: true
        }
    },

    nunjucks: {
        src: 'app/pages/**/*.+(html|njk)',
        data: './app/data/data.json',
        templates: ['app/templates'],
        dest: 'app'
    },

    sass: {
        src: 'app/scss/*.scss',
        dest: 'app/css',
        sassOptions: {
            errLogToConsole: true,
            outputStyle: 'expanded'
        },
        autoprefixerOptions: {
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }
    },

    scsslint: {
        config: '.sass-lint.yml'
    }

}

module.exports = config;
