const utils = require('../../../../helper/utils');
const jwt = require('../../../../helper/jwt');
// load constants
const { SERVERERROR, UNAUTHORISED, SUCCESSCODE, PAGE400 } = require('../../../../constants/common');
/* load services */
const userService = require('./userService');
const userController = {};


/* login */
userController.login = async (req, res) => {
	logger.log({
		level: 'info',
		message: 'login',
	});
	try {
		const {
			body: { password },
			user,
		} = req;
		let responseData = {};
		if (!utils.empty(user) && password && (userService.authenticate(password, user.password))) {
			responseData = await userController.doLogin(user, req, res);
			return res.status(SUCCESSCODE.STANDARD).json({
				msg: req.t('LOGIN_SUCCESS'),
				data: responseData,
				status: true,
			});
		}
		return res.status(UNAUTHORISED.CODE).json({
			errors: { msg: req.t('EMAIL_PASSWORD_MISMATCH') },
			status: false,
		});
	} catch (error) {
		logger.log({
			level: 'error',
			message: 'Error at login ' + error,
		});
		return res.status(SERVERERROR.CODE).json({
			errors: { msg: req.t(SERVERERROR.MESSAGE) },
			status: false,
		});
	}
};

/* doLogin called from login */
userController.doLogin = async (user) => {
	logger.log({
		level: 'info',
		message: 'doLogin',
	});
	try {
		let responseData = {};
		user = user.toJSON();
		delete user.password;
		user.secretToken = jwt.createSecretToken({
			userId: user.id,
		});
		responseData = user;
		return responseData;
	} catch (error) {
		logger.log({
			level: 'error',
			message: 'Error at doLogin ' + error,
		});
		throw error;
	}
};


module.exports = userController;
