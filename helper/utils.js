
const fs = require('fs');
const bcrypt = require('bcryptjs');
const utils = {};

utils.isDefined = (variable) => {
  if (typeof variable === 'boolean') return true;
  return (
    typeof variable !== undefined &&
    typeof variable !== 'undefined' &&
    variable !== null &&
    variable !== ''
  );
};

utils.isEmpty = (value) => {
  const emptyAry = ['', undefined, null, 'undefined', 'null', [], '[]', {}, '{}', false, 'false'];
  let response;
  if (emptyAry.includes(value)) {
    response = true;
  } else {
    response = false;
  }
  return response;
};

utils.empty = (mixedVar) => {
  let undef;
  let key;
  let i;
  let len;
  const emptyValues = ['undefined', null, false, 0, '', '0', undefined];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixedVar === 'object') {
    for (key in mixedVar) {
      return false;
    }
    return true;
  }

  return false;
};

utils.emptyWithOutZero = (mixedVar) => {
  let undef;
  let key;
  let i;
  let len;
  const emptyValues = ['undefined', null, false, '', undefined];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixedVar === 'object') {
    for (key in mixedVar) {
      return false;
    }
    return true;
  }
  return false;
};

utils.hash = (data) => {
  const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
  return bcrypt.hashSync(data, salt);
};

utils.compare = (data, hash) => {
  return bcrypt.compareSync(data, hash);
};

utils.getHtmlContent = (filePath, callback) => {
  let content = '';
  fs.readFile(filePath, 'utf8', (err, html) => {
    utils.echoLog(err);
    if (!err) {
      content = html;
    }
    callback(null, content);
  });
};

utils.capitalizeFirstLetter = (inStr) => {
  if (utils.empty(inStr)) return inStr;

  return inStr.replace(/\w\S*/g, (tStr) => {
    return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
  });
};

utils.randNumber = (length = 10) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

utils.generateOTP = (length = 4) => {
  let text = '';
  let possible = '0123456789';

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

/* convert obejct with tofixed(2) */
utils.objectMapToFixed = (object = {}, expo = 2) => {
  for (var i in object) {
    object[i] = object[i].toFixed(expo);
  }
  return object;
};

/* remove hyphens and white spaces from string */
utils.removeHyphensSpaces = (reqString) => {
  if (!utils.empty(reqString)) {
    return reqString.replace(/-|\s/g, '');
  } else {
    return false;
  }
};

/* 
  convert positive to negative value
*/
utils.convertPosToNeg = (num) => {
  return -Math.abs(num);
};

/* 
  convert into  absolute value
*/
utils.convertAbsolute = (num) => {
  return Math.abs(num);
};


utils.round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

utils.parseFloat = (value, decimals = 2) => {
  if (!value) {
    value = 0.0;
  }
  return parseFloat(parseFloat(value).toFixed(decimals));
};

utils.convertToCamelCase = (inputString) => {
  inputString = inputString.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ').split(' ');
  for (let i = 0; i < inputString.length; i++) {
    inputString[i] =
      inputString[i].length > 0
        ? inputString[i][0].toUpperCase() +
        inputString[i].substr(1, inputString[i].length).toLowerCase()
        : inputString[i];
  }
  return inputString.join(' ').trim();
};

module.exports = utils;
