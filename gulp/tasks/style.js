var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function(){
  // console.log("Imagine a future stylesheet change.");

  //send css through pipe to a destination
    //will create a new dir in temp folder
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/style'));
});
