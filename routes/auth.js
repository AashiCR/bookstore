const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); 
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/resetpassword', authController.resetPassword);

module.exports = router;
