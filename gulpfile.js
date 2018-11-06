const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('styles', function(){
  gulp.src('./scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);
