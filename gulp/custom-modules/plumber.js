const $                 = require('gulp-load-plugins')();

function customPlumber(errTitle) {
    return $.plumber({
        errorHandler: $.notify.onError({
            // Customizing error title
            title: errTitle || "Error running Gulp", message: "Error: <%= error.message %>",
        })
    });
}

module.exports = customPlumber;
