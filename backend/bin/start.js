const backend = require('../backend');
const debug = require('debug')('backend:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || '7000';
var server;
// process.env.DEBUG = 'backend:*';
console.log('[PROCESS ENV DEBUG]',  process.env.DEBUG)
console.log('[PROCESS ENV PORT]',  process.env.PORT)
// debug('Listening on ', port);


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('[LISTENING ON]' + bind);
  console.log('[LISTENING ON]' + bind);
}

function onClose(){
  console.log('[SHUTTING DOWN SERVER]');
}
/**
 * Listen on provided port, on all network interfaces.
 */

function start(){
  console.log('[BOOTING UP BACKEND]');
  backend.set('port', port);
  server = http.createServer(backend);
  
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  server.on('close', onClose);

  process.on('SIGINT', function() {
    // db.stop(function(err) {
    //   process.exit(err ? 1 : 0);
    // });
    console.log('[KILLING SERVER] SIGINT:');
    server.close();
 });
}

function stop(){
  server.close();
}

start();
// exports.start = start;
// exports.stop = stop;
