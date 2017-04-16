
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('sass'))
});

gulp.task('watch', function(){
    gulp.watch('sass/style.scss', ['sass']);
})
