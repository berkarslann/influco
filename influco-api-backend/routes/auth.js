const express = require('express');

const User = require('../models/user');
const Influencer = require('../models/influencer')
const Brand = require('../models/brand')
const authController = require('../controllers/auth');

const router = express.Router();

//POST 
router.post('/signup', authController.signup)
router.post('/login', authController.login)

//GET 
router.get('/check-token', authController.currentUserCheck);
router.get('/check-user-info', authController.currentUserInfo);

module.exports = router;