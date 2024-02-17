// gulpfile.js

const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// Define a task to process JavaScript files
function jsTask() {
    return src('src/js/*.js') // Path to your JavaScript files
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('script.js')) // Concatenate all files into one
        .pipe(uglify()) // Minify the JavaScript code
        .pipe(dest('dist/js')); // Output directory
}

// Define a task to process SCSS files
function scssTask() {
    return src('src/scss/*.scss') // Path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css')); // Output directory
}

// Export the tasks to make them available in the Gulpfile
exports.jsTask = jsTask;
exports.scssTask = scssTask;
