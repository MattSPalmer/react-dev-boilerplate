var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', ['sync', 'nodemon', 'copy', 'move'], function () {
    watch('./src/htdocs/**/*',                    function() { gulp.start('move') });
    watch('./src/assets/**/*',                    function() { gulp.start('copy') });
});
