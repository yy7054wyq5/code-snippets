var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function () {
  connect.server({
    host: '192.168.1.14',
    port: '9999',
    livereload: true
  });

  gulp.watch(['index.html', 'index.js'], ['reload']);

  gulp.task('reload', function () {
    gulp.src(['index.html'])
      .pipe(connect.reload());
  });
});