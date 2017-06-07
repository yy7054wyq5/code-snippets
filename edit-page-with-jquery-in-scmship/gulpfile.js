var gulp = require('gulp')
var connect = require('gulp-connect')
var open = require('gulp-open');
/**
 * 启动开发环境服务器
 */
gulp.task('serve', function () {

  connect.server({
    root: ['.tmp', 'src', 'node_modules'],
    host: 'localhost',
    port: 4300,
    livereload: true,
    //代理请求
    middleware: function (connect, opt) {
      var Proxy = require('gulp-connect-proxy-with-headers')
      //opt.route = '/proxy';
      var proxy = new Proxy(opt);
      return [proxy];
    }
  })
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('open', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://localhost:4300'}));
});

gulp.task('watch', function(){
  // 监听文件变动并刷新
  gulp.watch(['src/index.html'],['html']);
});

gulp.task('dev', ['serve','open','watch']);