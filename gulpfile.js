const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

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

// Export the task to make it available in the Gulpfile
exports.jsTask = jsTask;

exports.default=series(scssTask, jsTask, browserSyncServe, watchTask);
exports.build=series(scssTask, jsTask);