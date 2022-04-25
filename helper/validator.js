const validator = {};
const moment = require('moment');
validator.customMessage = (validation, param, length, format) => {
  if (validation === 'isInt') {
    return l10n.t('SHOULD_BE_INT', { FIELD: param });
  } else if (validation === 'isArray') {
    return l10n.t('SHOULD_BE_ARRAY', { FIELD: param });
  } else if (validation === 'isAlpha') {
    return l10n.t('SHOULD_BE_IN_ALPHA', { FIELD: param });
  } else if (validation === 'isMatch') {
    return l10n.t('SHOULD_BE_IN_MATCH', { FIELD: param });
  } else if (validation === 'isString') {
    return l10n.t('SHOULD_BE_STRING', { FIELD: param });
  } else if (validation === 'isRequired') {
    return l10n.t('FIELD_REQUIRED', { FIELD: param });
  } else if (validation === 'isIn') {
    return l10n.t('INVALID_VALUE', { FIELD: param });
  } else if (validation === 'isNegative') {
    return l10n.t('CANNOT_BE_NEGATIVE', { FIELD: param });
  } else if (validation === 'isMin') {
    return l10n.t('CHECK_MIN_LENGTH', { FIELD: param, LENGTH: length });
  } else if (validation === 'isMax') {
    return l10n.t('CHECK_MAX_LENGTH', { FIELD: param, LENGTH: length });
  } else if (validation === 'isLength') {
    return l10n.t('CHECK_LENGTH', { FIELD: param, LENGTH: length });
  } else if (validation === 'isDateFormat') {
    return l10n.t('CHECK_DATE_FORMAT', { FIELD: param, FORMAT: length });
  } else {
    return l10n.t('ERROR');
  }
};
validator.checkNegativeValue = (value) => {
  if (+value < 0) {
    return false;
  } else {
    return true;
  }
};

validator.checkExists = (value) => {
  if (utils.empty(value)) {
    return false;
  } else {
    return true;
  }
};

validator.checkDateFormat = (value, format) => {
  let isValid = false;
  if (utils.empty(value)) {
    return isValid;
  } else {
    isValid = moment(value, format, true).isValid();
    return isValid;
  }
};

module.exports = validator;
