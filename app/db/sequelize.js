import Sequelize from 'sequelize';
import co from 'co';
import Promise from 'bluebird';

import { db } from '../config';
import { logger, sequelizeLogger } from '../logger';
console.log(db.database, db.username, db.password);
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  logging: sequelizeLogger.debug,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

function isStringField(fieldType) {
  return fieldType instanceof Sequelize.TEXT
    || fieldType instanceof Sequelize.STRING
    || fieldType instanceof Sequelize.UUIDV1
    || fieldType instanceof Sequelize.UUIDV4;
}

function ensureDBConnection() {
  return co(function* ensure() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        yield sequelize.authenticate();
        break;
      } catch (e) {
        if (e instanceof Sequelize.ValidationError) {
          throw e;
        }
        logger.debug(`sequelize.authenticate failed: ${e.message}`);
        yield Promise.delay(1000);
      }
    }

    yield sequelize.sync({});
    return true;
  });
}

function startTransaction(func, isolationLevel = Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE) {
  return sequelize.transaction({
    isolationLevel,
  }, func);
}

export default sequelize;
export {
  isStringField,
  ensureDBConnection,
  startTransaction,
};
