var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('sass', () => {
  return gulp.src('./css/*.scss')
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('watch', () => gulp.watch('./css/*.scss', ['sass']));

gulp.task('default', ['sass']);
