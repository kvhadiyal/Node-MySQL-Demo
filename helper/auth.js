const jwt = require('./jwt');
const utils = require('./utils');
const userService = require('../modules/v1/web/user/userService');
const { UNAUTHORISED, FORBIDDENACCESS } = require('../constants/common');
const { ROLE } = require('../constants/model');
const auth = {};

/* 
-  middleware that verify jwt token valid or not
-  get user and set in request 
*/
auth.isAuthenticatedUser = async (req, res, next) => {
  let token = req.headers && req.headers['x-auth-token'];
  const userData = jwt.verify(token);
  if (utils.empty(userData.userId)) {
    return res.status(UNAUTHORISED.CODE).json({
      errors: { msg: req.t(UNAUTHORISED.MESSAGE) },
      status: false
    });
  }
  const where = {
    id: userData.userId,
  };
  userService.getUser({ where }).then((user) => {
    if (user) {
      req.authUser = user;
      return next();
    }
    return res.status(FORBIDDENACCESS.CODE).json({
      errors: { msg: req.t(FORBIDDENACCESS.MESSAGE) },
      status: false
    });
  });
};

module.exports = auth;
