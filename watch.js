'use strict';

var colors = require('colors');
var exec = require('child_process').exec;
var chokidar = require('chokidar');

var watcher = chokidar.watch([
  './contents/**',
  './data/**',
  './templates/**',
  './src/**'
], { persistent: true });

watcher
  .on('ready', function(path) { console.log('Watching...'.yellow); })
  .on('change', function(path, stats) {
    exec('npm run build', {}, function(error, stdout, stderr) {
      console.log('Build succeed.'.green);
      console.log('Watching...'.yellow);
    });
  });