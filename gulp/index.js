var fs = require('fs'),
    util = require('./util'),
    tasks = fs.readdirSync('./gulp/tasks/', util.scriptFilter);

tasks.forEach(function (task) {
    require('./tasks/' + task);
});
