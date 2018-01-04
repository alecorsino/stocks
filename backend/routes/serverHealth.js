var os = require('os'),
  exec = require('child_process').exec,
  async = require('async'),
  started_at = new Date();
const PORT = process.env.PORT || '7000';
var express = require('express');
var router = express.Router();

// module.exports = function (req, res, next) {
router.get('/', function (req, res, next) {
  var server = req.app;
  if (req.param('health')) {
    var connections = {},
      swap;
    async.parallel([
      function (done) {
        exec(`netstat -an | grep :${PORT} | wc -l`, function (e, res) {
          connections[PORT] = parseInt(res, 10);
          done();
        });
      },
      function (done) {
        exec(
          'netstat -an | grep :' +
          server.set('port') +
          ' | wc -l',
          function (e, res) {
            connections[server.set('port')] = parseInt(res, 10);
            done();
          }
        );
      },
      function (done) {
        exec('vmstat -SM -s | grep "used swap" | sed -E "s/[^0-9]*([0-9]{1,8}).*/\1/"',
          function (e, res) {
            swap = res;
            done();
          });
      }
    ], function (e) {
      res.send({
        status: 'up',
        version: server.get('version'),
        sha: server.et('git sha'),
        started_at: started_at,
        node: {
          version: process.version,
          memoryUsage: Math.round(process.memoryUsage().rss / 1024 / 1024) + "M",
          uptime: process.uptime()
        },
        system: {
          loadavg: os.loadavg(),
          freeMemory: Math.round(os.freemem() / 1024 / 1024) + "M"
        },
        env: process.env.NODE_ENV,
        hostname: os.hostname(),
        connections: connections,
        swap: swap
      });
    });
  } else {
    res.send({
      status: 'up'
    });
  }
});

module.exports = router;