/**
 * Created by EnchanterZero on 16/11/30.
 */
export function create(sequelize, DataTypes) {
  const Chapter = sequelize.define('Chapter', {
    id: {
      type: DataTypes.UUID,
      validate: {
        isLowercase: true
      },
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "eg. 第n章 / 御魂 / 妖怪退治",
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "eg. 第n章的标题 / 御魂 / 妖怪退治",
    },
    normal_level_limit: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "普通开放等级",
    },
    normal_monster_level: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "普通怪物等级",
    },
    normal_exp: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "普通获得经验",
    },
    hard_level_limit: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "困难开放等级",
    },
    hard_monster_level: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "困难怪物等级",
    },
    hard_exp: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "困难获得经验",
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [
      {
        fields: ['name'],
        unique: true,
      },
      {
        fields: ['title'],
        unique: true,
      },
    ],
    //http://docs.sequelizejs.com/en/v3/docs/models-definition/#expansion-of-models
    classMethods: {
      method1: function(){ return 'smth' }
    },
    instanceMethods: {
      method2: function() { return 'foo' }
    }
  });
  return Chapter;
};