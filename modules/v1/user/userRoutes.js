// Dependencies
const express = require('express');
const userRoute = express.Router();
const userController = require('./userController');
const userMiddleware = require('./userMiddleware');
const userValidator = require('./userValidator');
const { validationHandler } = require('../../../../helper/validate');

const loginMiddleware = [
	userValidator.validateUser(),
	validationHandler,
	userMiddleware.emailDoesNotExists,
	userController.login,
];
userRoute.post('/login', loginMiddleware);

// const createUserMiddleware = [
// 	userValidator.validateCreateUser(),
// 	validationHandler,
// 	userMiddleware.emailExists,
// 	userController.createUser,
// ];
// userRoute.post('/create-user', createUserMiddleware);

module.exports = userRoute;
