var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
  // console.log("Imagine a future stylesheet change.");

  //send css through pipe to a destination
    //will create a new dir in temp folder
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .on('error',function(errorInfo){
      console.log(errorInfo.toString()); //indicate error in human-friendly way
      this.emit('end'); //won't stop gulp watch when error
    })
    .pipe(gulp.dest('./app/temp/style'));
});
