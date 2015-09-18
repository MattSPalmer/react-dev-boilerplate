var gulp = require('gulp');
var exit = require('gulp-exit')


gulp.task('build', ['pack', 'copy', 'move'], function() {
    return gulp.src('').pipe(exit());
});
