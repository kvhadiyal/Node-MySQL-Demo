const { body } = require('express-validator');
const { l10n } = global;
const userValidator = {};
userValidator.validateUser = () => {
  return [body('email', l10n.t('INVALID_EMAIL')).isEmail()];
};

module.exports = userValidator;
