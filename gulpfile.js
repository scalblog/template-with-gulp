'use strict';

var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


 
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
   
  gulp.task('sass:watch', function () {
    return gulp.watch('./sass/**/*.scss', ['sass']);
  });
 
gulp.task('jsmin', function () {
    return gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass','jsmin','sass:watch'], function (){

});