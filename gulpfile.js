/*
* Dependencies
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  GulpSSH = require('gulp-ssh'),
  fs = require('fs'),
  sass = require('gulp-sass');

/*
* Config sass watcher
*/

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/*.sass', ['sass']);
});



/*
* Config minify task  
*/
gulp.task('minify', function () {
  gulp.src('./assets/js/source/*.js')
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});

/*
* Config deploy task
*/


 

