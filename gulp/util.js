var path = require('path'),
    notify = require('gulp-notify');

module.exports = {
    scriptFilter: function (name) {
        return /(\.(js)$)/i.test(path.extname(name));
    },
    handleErrors: function () {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
    }
}
