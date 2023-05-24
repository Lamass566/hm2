const gulp = require("gulp");
const mincss = require("gulp-clean-css");
const autoprefix = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require('sass'));
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const fileinclude = require("gulp-file-include");
const minJs = require("gulp-minify");

function browserServe(stop){
    browsersync.init({
        server:{
            baseDir: './dist'
        }
    })

    stop()
}

function html(){
    return gulp.src('./src/**/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest('./dist'))
}

function browserReload(){
    browsersync.reload()
}

function css(stop){
    gulp.src('./src/**/*.scss')
    .pipe(concat('styles.min.scss'))
    .pipe(sass().on("error", sass.logError))
    .pipe(mincss())
    .pipe(autoprefix())
    .pipe(gulp.dest('./dist/css'))

    stop();
}

function js(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(minJs())
    .pipe(gulp.dest('./dist/js'))
}

function img(){
    return gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}

function watch(){
    gulp.watch('./src/**/*.*', gulp.series(gulp.parallel(html, css, img, js), browserReload))
}



exports.js = js;
exports.html = html;
exports.css = css;
exports.img = img;

exports.build = gulp.parallel(html, css, img,js);
exports.dev = gulp.series(html,css,img,js, browserServe,watch);