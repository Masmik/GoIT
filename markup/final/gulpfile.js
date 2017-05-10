'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
    return gulp.src('src/css/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
});


gulp.task('img', function () {
    return gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function () {
    gulp.watch("src/css//*.scss", ['sass']);
    gulp.watch("src/img/*", ['img']);
});

gulp.task("default", ['img', 'saas', 'watch']);
