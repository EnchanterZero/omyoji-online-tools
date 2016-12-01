/**
 * Created by intern07 on 16/12/1.
 */
export function create(sequelize, DataTypes) {
  const Section = sequelize.define('Section', {
    id: {
      type: DataTypes.UUID,
      validate: {
        isLowercase: true
      },
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      defaultValue: '第一回合',
      allowNull: false,
      unique: true,
      comment: "第一回合 第二回合 第三回合",
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "eg. 第一只天邪鬼黄",
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return Section;
};