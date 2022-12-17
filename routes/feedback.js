var express = require('express');
var router = express.Router();
const feedbackController = require('../controllers/feedback_controller')

router.get('/', feedbackController.feedback);


module.exports = router;
