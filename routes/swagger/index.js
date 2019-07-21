var express = require('express');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerEditor = require('swagger-editor-dist');
const swaggerDocument = require('./swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.get('/editor', swaggerEditor);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('swagger resource');
// });

module.exports = router;
