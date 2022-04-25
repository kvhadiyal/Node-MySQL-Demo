const SUCCESSCODE = {
  STANDARD: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOCONTENT: 204,
};

const SERVERERROR = {
  CODE: 500,
  MESSAGE: 'ERROR',
};

const PAGE404 = {
  CODE: 404,
  MESSAGE: 'PAGE_NOT_FOUND',
};

const PAGE422 = {
  CODE: 422,
  MESSAGE: 'UNPROCESSIBLE_ENTITY',
};

const PAGE400 = {
  CODE: 400,
  MESSAGE: 'BAD_REQUEST',
};

const ERROR400 = 400;

const UNAUTHORISED = {
  CODE: 401,
  MESSAGE: 'NOT_AUTHORIZED',
};

const FORBIDDENACCESS = {
  CODE: 403,
  MESSAGE: 'FORBIDDENACCESS',
};

module.exports = {
  PAGE404,
  SUCCESSCODE,
  ERROR400,
  FORBIDDENACCESS,
  UNAUTHORISED,
  SERVERERROR,
  PAGE422,
  PAGE400,
};
