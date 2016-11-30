/**
 * Created by intern07 on 16/11/30.
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
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    normal_level_limit: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    normal_monster_level: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    normal_exp: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    hard_level_limit: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    hard_monster_level: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    hard_exp: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
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
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return Chapter;
};