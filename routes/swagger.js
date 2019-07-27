var express = require('express');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../lib/swagger/swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.get('/editor',function(req, res, next) {
    res.send({"data":"api fro editor"});
  });

module.exports = router;
