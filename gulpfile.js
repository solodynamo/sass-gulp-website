var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var js_obfuscator = require('gulp-js-obfuscator');

var paths = {
  sass: ['./scss/**/*.scss']
};

var runSequence = require('run-sequence');

gulp.task('totalBuild', function (callback) {
    runSequence('sass', 'total', 'watch', callback);
});

gulp.task('default', ['sass']);

gulp.task('imgz', () =>
    gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('www/images'))
);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('total', function () {
  gulp.src('www/js/**/*.js')
    .pipe(ngAnnotate())
    .pipe(js_obfuscator({}, ["**/jquery-*.js"]))
    .pipe(ngAnnotate())
    .pipe(uglify().on('error', function (e) {
      console.log(e);
    }))
    .pipe(ngAnnotate())
    //.pipe(concat('all.js'))
    .pipe(gulp.dest('www/minjs/'));
});
