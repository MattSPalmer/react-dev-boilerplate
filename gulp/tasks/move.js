var gulp = require('gulp');
var sync = require('browser-sync');

gulp.task('move', function() {
    return gulp.src('./src/htdocs/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(sync.reload({stream: true}));
});
