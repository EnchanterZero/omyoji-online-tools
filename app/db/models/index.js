import Sequelize from 'sequelize';
import sequelize from '../sequelize';
//import { util } from '../../../util';
//const logger = util.logger.getLogger('models');
//import co from 'co';

export const Chapter = require('./chapter').create(sequelize, Sequelize);
//export const DefaultSettings = require('./defaultsettings').create(sequelize, Sequelize);
//export const UserSettings = require('./usersettings').create(sequelize, Sequelize);
//export const UploadStatus = require('./uploadstatus').create(sequelize, Sequelize);

const models = sequelize.models;

Chapter.associate(models);
//DefaultSettings.associate(models);
//UserSettings.associate(models);
//UploadStatus.associate(models);
Chapter.sync()
export default models;
