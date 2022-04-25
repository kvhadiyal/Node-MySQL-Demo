const { validationResult } = require('express-validator');
const { PAGE422 } = require('./../constants/common');

const validationHandler = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(PAGE422.CODE).json({
      errors: result.array(),
    });
  }
  return next();
};

module.exports = {
  validationHandler: validationHandler,
};
