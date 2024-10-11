// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.registerUser); // User registration
router.post('/login', userController.loginUser); // User login
router.post('/logout', userController.logoutUser); // User logout

module.exports = router;
