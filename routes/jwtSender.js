const express = require('express');
const authController = require('../controllers/auth-controller');
const AuthToken = require('../middleware/auth-token');
const router = express.Router();


router.post('/', AuthToken.njwtAuth);


module.exports = router; 