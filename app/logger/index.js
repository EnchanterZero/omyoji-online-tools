import winston from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';
import expressWinston from 'express-winston';
import path from 'path';
import fs from 'fs';

import config from '../config';
import eventType from './logevent';

const timestamp = function timestamp() {
  return new Date().toISOString();
};

const formatter = function formatter(options) {
  const message = undefined !== options.message ? options.message : '';
  const meta = options.meta && Object.keys(options.meta).length ? `\n${JSON.stringify(options.meta)}` : '';
  return `${options.timestamp()} - ${options.level.toUpperCase()}:${message}${meta}`;
};

const logdir = config.get('LOG_DIR');
if (!fs.existsSync(logdir)) {
  fs.mkdirSync(logdir);
}

const logger = new winston.Logger({
  level: 'debug',
  transports: [
    // eslint-disable-next-line
    new winston.transports.Console({
      timestamp,
      formatter,
    }),
    // eslint-disable-next-line
    new winstonDailyRotateFile({
      filename: path.join(logdir, 'server.log'),
      timestamp,
    }),
  ],
});
logger.logEvent = function logevent(type, description) {
  logger.info(type, description);
};
logger.eventType = eventType;

export default logger;

const sequelizeLogger = new winston.Logger({
  level: 'debug',
  transports: [
    // eslint-disable-next-line
    new winstonDailyRotateFile({
      filename: path.join(logdir, 'sequelize.log'),
      timestamp,
    }),
  ],
});

const expressLogger = expressWinston.logger({
  winstonInstance: logger,
  level: 'info',
});

const expressErrorLogger = expressWinston.errorLogger({
  winstonInstance: logger,
  json: true,
  level: 'error',
});

export {
  sequelizeLogger,
  expressLogger,
  expressErrorLogger,
};
