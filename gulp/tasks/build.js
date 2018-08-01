var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
  browserSync.init({
    notify: false, //to hide black box notification
    server: {
      // baseDir: "dist"
      baseDir: "docs"
    }
  });
});


// Create task to delete dist folder and create fresh dist folder each time a change is made
gulp.task('deleteDistFolder', ['icons'], function(){
  // return del("./dist");
  return del("./docs");
});


gulp.task('copyGeneralFiles',['deleteDistFolder'], function(){
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/style/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
  // .pipe(gulp.dest("./dist"));
  .pipe(gulp.dest("./docs"));
});


// Create task to copy all images to dist folder and compress them
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  // .pipe(gulp.dest("./dist/assets/images"));
  .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start("usemin");
});

// task for usemin
gulp.task('usemin', ['styles', 'scripts'], function(){
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css: [function(){return rev()}, function(){return cssnano()}],
    js: [function(){return rev()}, function(){return uglify()}]
  }))
  // .pipe(gulp.dest("./dist"));
  .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
