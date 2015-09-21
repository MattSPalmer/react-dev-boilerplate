var gulp = require('gulp');

gulp.task('move', function() {
    var out = gulp.src('./src/htdocs/*.html')
        .pipe(gulp.dest('dist/'))
    if (process.env.NODE_ENV != 'production') {
      var sync = require('browser-sync');
      return out.pipe(sync.reload({stream: true}));
    } else {
      return out;
    }
});
