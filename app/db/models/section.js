/**
 * Created by EnchanterZero on 16/12/1.
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
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "eg. 第一只天邪鬼黄",
    },
    isBoss:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
      unique: true,
      comment: "",
    },
    monster_statistics:{
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "{'a怪':5,'b怪':3}",
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