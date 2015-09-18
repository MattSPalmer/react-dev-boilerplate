var gulp = require('gulp');

gulp.task('copy', function() {
    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
})
