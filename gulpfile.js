/*
* Dependencies
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  GulpSSH = require('gulp-ssh'),
  fs = require('fs');

/*
* Config minify task
*/
gulp.task('minify', function () {
  gulp.src('js/source/*.js')
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});

/*
* Config deploy task
*/

var config = {
  host: '162.144.202.98',
  port: 22,
  username: 'root',
  password:'f>ua9NRs8j>',
  privateKey: fs.readFileSync('/Users/Miguel Soler/.ssh/id_rsa')
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})
 
gulp.task('testcon', function () {
  return gulpSSH
    .exec(['uptime', 'ls -a', 'pwd'], {filePath: 'commands.log'})
    .pipe(gulp.dest('logs'))
})
 
gulp.task('gradideploy', function () {
  return gulp
    .src(['./**/*.js', './**/*.php','!**/node_modules/**'])
    .pipe(gulpSSH.dest('/home/gradites/public_html/adrian/'))
})  
