const config = {

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

    js: {
        src: 'app/js/app.js',
        dest: 'app/js/dist',
        babelOptions: {
            sourceMapRelative: 'app/js',
            presets: ['es2015']
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
    }

}

module.exports = config;
