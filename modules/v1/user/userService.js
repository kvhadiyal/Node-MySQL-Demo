const {
	models: {
		users: usersModel,
	},
} = global;
const utils = require('../../../../helper/utils');

const userService = {};

userService.createUser = (data) => {
	return usersModel.create(data);
};

userService.findOneUserById = (id) => {
	let query = {
		where: {
			id: id,
		},
	};
	return usersModel.findOne(query);
};

userService.getUser = (where) => {
	return usersModel.findOne(where);
};

userService.findOneUserByEmail = (email) => {
	let query = {
		where: {
			email: email,
		},
	};
	return usersModel.findOne(query);
};

userService.authenticate = (otp, hasOtp) => {
	return utils.compare(otp, hasOtp);
};

module.exports = userService;
