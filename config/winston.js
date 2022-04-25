const { createLogger, format, transports } = require('winston');

const { combine, timestamp, colorize, simple } = format;
require('winston-daily-rotate-file');

function getLoogerFor(level) {
  return new transports.DailyRotateFile({
    filename: `${process.env.NODE_ENV}-${level}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20g',
    maxFiles: '14d',
    dirname: '../logs',
    localTime: true,
  });
}

const httpTransportOptions = {
  host: process.env.WINSTON_HTTP_HOST,
  path: process.env.WINSTON_HTTP_PATH,
  ssl: process.env.WINSTON_HTTP_SSL,
};

function createLoggerFor(level) {
  return createLogger({
    format: combine(
      timestamp(),
      colorize({
        colors: {
          info: 'blue',
          error: 'red',
        },
      }),
      simple()
    ),
    transports: [
      getLoogerFor(level),
      new transports.Console(),
      new transports.Http(httpTransportOptions),
    ],
  });
}

global.logger = createLoggerFor('log');
