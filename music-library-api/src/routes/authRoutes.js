const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Register a new user
router.post('/signup', signup);

// Authenticate user and return token
router.post('/login', login);

module.exports = router;
