var express = require('express');
var router = express.Router();
const buyController = require('../controllers/buy_controller')

router.get('/', buyController.muahang);


module.exports = router;
