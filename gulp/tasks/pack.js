var gulp = require('gulp');

var webpack = require('webpack-stream');

var webpack_cfg = require('../../webpack.config.js');

gulp.task('pack', function() {
    return gulp.src('')
        .pipe(webpack(webpack_cfg.build))
        .pipe(gulp.dest('dist/'));
});
