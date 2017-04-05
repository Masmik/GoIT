var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('app/css/*.css')
        .pipe(concatCss('concat.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
    return gulp.src('app/js/*.js')
        .pipe(concat('concat.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

