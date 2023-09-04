const express = require('express');
const authController = require('../controllers/auth-controller');
const validatorAuth = require('../middleware/auth-validator');
const router = express.Router();


router.post('/', validatorAuth.validatorParams, validatorAuth.validator, authController.auth);


module.exports = router; 