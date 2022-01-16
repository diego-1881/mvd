var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    cssnano = require("cssnano");
var browserSync = require("browser-sync").create();

function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([cssnano()]))
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}
exports.style = style

function reload(done) {
  browserSync.reload();
  done();
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("./*.html", reload);
}
exports.watch = watch

// Put this after including our dependencies
var paths = {
    styles: {
        src: "./assets/css/*.scss",
        dest: "./assets/css/"
    }
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};
