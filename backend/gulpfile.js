var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var spawn = require('child_process').spawn;


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:7000"
    });

    gulp.watch('backend.js', ['server:restart']);
    // gulp.watch("backend.js").on('change', browserSync.reload);
});

var command;
gulp.task('server:debug', function (cb) {
  process.env.DEBUG = 'backend:*';
  command = spawn('node', ['bin/boot-backend.js'] );
  // command = spawn('ls', ['-la'] );
  
  command.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  command.stderr.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  command.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
 
});

gulp.task('kill:server', function(done) {
  if (command){
    console.log('[KILLING PROCESS]')
    command.kill('SIGHUP');//'SIGHUP'
    command = null;
  }
  done();
});

gulp.task('server:restart',['kill:server','server:debug'], function (done) {
  console.log('[RELOADING]');
  browserSync.reload();
  done();
});

gulp.task('debug',['server:debug', 'browser-sync'], function (done) {
 console.log('[STARTING BACKEND]');
});

