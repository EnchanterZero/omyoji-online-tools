/**
 * Created by EnchanterZero on 16/12/1.
 */
export function create(sequelize, DataTypes) {
  const RoundMonster = sequelize.define('RoundMonster', {
    id: {
      type: DataTypes.UUID,
      validate: {
        isLowercase: true
      },
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "eg. 第一只天邪鬼黄",
    },
    quantity: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      comment: "怪物数量",
    },

  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [
    ],
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return RoundMonster;
};