var express = require('express');
const { validate, estimatedDocumentCount } = require('../models/user');
var router = express.Router();
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('trangchu', { title: 'Express' });
});

module.exports = router;