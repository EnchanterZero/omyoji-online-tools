import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import logger from '../../logger';
import Promise from 'bluebird';

export const Chapter = require('./chapter').create(sequelize, Sequelize);
export const Section = require('./section').create(sequelize, Sequelize);
export const Monster = require('./monster').create(sequelize, Sequelize);
export const Round = require('./round').create(sequelize, Sequelize);
export const RoundMonster = require('./round_monster').create(sequelize, Sequelize);

const models = sequelize.models;
Chapter.hasMany(Section);
Section.belongsTo(Chapter);
Section.hasMany(Round);
Round.belongsTo(Section);
Round.belongsToMany(Monster, { through: RoundMonster });
Monster.belongsToMany(Round, { through: RoundMonster });

logger.debug(7889);
var modelList = [Chapter, Section, Monster, Round, RoundMonster];
Promise.each(modelList,(model,index,length) =>{
  logger.debug(`checking table: `,model);
  return model.sync();
}).then(() =>{
    var count = yield Chapter.findAll();
    if(count.length === 0){
      //add init data
      logger.info(`adding initial data... `);
  }
})
.catch((err) => {
  logger.error(err);
  throw err
})

// HasOne inserts the association key in target model whereas BelongsTo inserts the association key in the source model.
export default models;
