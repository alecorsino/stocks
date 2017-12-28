var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Todas las rutas respondend en la ruta [http://servidor:puerto/api/]');
});

module.exports = router;
