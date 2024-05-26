const express = require('express')


const statsController = require('../controllers/stats');

const isAuth = require('../middleware/is-auth');


const router = express.Router();

router.get('/analyze-comment/:id', statsController.analyzeComment)


module.exports = router;