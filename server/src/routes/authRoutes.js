const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/authController');

authRouter.post('', AuthController.login);

module.exports = authRouter;
