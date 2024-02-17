const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass')); // Add require('sass')

function jsTask() {
    return src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

function sassTask() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

exports.default = parallel(jsTask, sassTask);
