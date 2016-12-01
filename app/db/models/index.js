import Sequelize from 'sequelize';
import sequelize from '../sequelize';
//import { util } from '../../../util';
//const logger = util.logger.getLogger('models');
//import co from 'co';

export const Chapter = require('./chapter').create(sequelize, Sequelize);
export const Section = require('./section').create(sequelize, Sequelize);
export const Monster = require('./monster').create(sequelize, Sequelize);
export const Round = require('./round').create(sequelize, Sequelize);
export const RoundMonster = require('./round_monster').create(sequelize, Sequelize);

const models = sequelize.models;

Chapter.hasMany(Section);
Section.hasMany(Round);
Round.belongsToMany(Monster, { through: RoundMonster });
Monster.belongsToMany(Round, { through: RoundMonster });
//DefaultSettings.associate(models);
//UserSettings.associate(models);
//UploadStatus.associate(models);
Chapter.sync();
Section.sync();
Monster.sync();
Round.sync();
RoundMonster.sync();

// HasOne inserts the association key in target model whereas BelongsTo inserts the association key in the source model.
export default models;
