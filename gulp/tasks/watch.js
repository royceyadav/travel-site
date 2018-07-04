var gulp = require('gulp'), // import a gulp package
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){
  //watch('file on computer to watch', what to do)

  browserSync.init({
    notify: false, //to hide black box notification
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    // gulp.start('html');
    browserSync.reload();
  });

  watch('./app/assets/style/**/*.css', function(){  //** =future hypothetical folders
    // gulp.start('styles');                           //* any file with .css ext.
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/style/style.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});
