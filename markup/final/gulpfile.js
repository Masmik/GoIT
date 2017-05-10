'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var spritesmith = require('gulp.spritesmith');

gulp.task('sass', function(){
    return gulp.src('src/css/main*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});


gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('concat', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('uglify-js', function () {
    return gulp.src(['dist/js/*.js', 'src/js/polifill-and-masonry/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/uglify'))
});

gulp.task('sprite', function generateSpritesheets () {
    var spriteData = gulp.src('src/img/partner-icons/*.png')
        .pipe(spritesmith({
            imgName: 'spritesheet.png',
            cssName: 'sprites.scss'
        }));
    spriteData.img.pipe(gulp.dest('src/img'));
    spriteData.css.pipe(gulp.dest('src/css'));
});


gulp.task('watch', function () {
    gulp.watch("src/css//*.scss", ['sass']);
    gulp.watch("src/img/*", ['img']);
    gulp.watch("src/js/*", ['js']);
});

gulp.task("default", ['img', 'sass', 'concat','minify-css','uglify-js','sprite','watch']);
