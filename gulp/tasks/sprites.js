var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// delete app/temp/sprites folder
// delete app/assets/images/sprites folder
//    --> these are created with the next createSprite task anyway
//    --> ? because you don't want to duplicate or house old svg files
gulp.task('beginClean', function(){
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg') /* the ** is in case there are subfolders */
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/')); /* create a new folder and drop sprites there */
});

//move location of auto-generated sprite.svg file to main images folder
  // the [ ] indiciates this task depends no createSprite
gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
      .pipe(gulp.dest('./app/assets/images/sprites'));
});

                            /* [ ] indicate a dependency/run this task first before */
gulp.task('copySpriteCSS', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/style/modules'));
});

//once all tasks have been ran, delete temp folder
gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'], function(){
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
