var gulp = require('gulp');
var webpack = require('webpack');

if (process.env.NODE_ENV === 'development') {
  var sync = require('browser-sync');
  var nodemon = require('gulp-nodemon');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
}

var webpackConfig = require('../../webpack.config');
var bundler = webpack(webpackConfig.development);

gulp.task('sync', function () {
    sync.init(null, {
        proxy: {
            target: "http://localhost:8080",
            middleware: [
                webpackDevMiddleware(bundler, {
                    publicPath: webpackConfig.development.output.publicPath,
                    stats: {colors: true}
                }),
                webpackHotMiddleware(bundler)
            ]
        },
        files: ['./dist/*.html'],
        browser: "google chrome",
        port: 7000,
        // don't open the browser
        open: false,
        // hide the notify on the corner
        notify: false,
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
        }
    });
});

gulp.task('nodemon', function (cb) {
    var init = true;
    return nodemon({
        watch: ['./server/'],
        script: 'server/server.js',
        exec: './node_modules/.bin/babel-node'
    }).on('start', function () {
        if (init) cb(); init = false;
    });
});
