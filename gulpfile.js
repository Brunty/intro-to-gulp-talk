// loop through the tasks directory and load all files from within there
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });