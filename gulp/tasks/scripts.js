var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
    //install webpack locally for this project
    webpack(require('../../webpack.config.js'), function(err, stats){

      if(err){
        console.log(err.toString()); //checking for errors
      }

      // console.log("Hooray! Webpack completed!");
      console.log(stats.toString());
      callback();
    });
});
