/**
 * Created by EnchanterZero on 16/12/1.
 */
export function create(sequelize, DataTypes) {
  const Monster = sequelize.define('Monster', {
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
      comment: "怪物名字",
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
      comment: "",
    },
    rank: {
      type: DataTypes.STRING,
      defaultValue: 'unknown',
      allowNull: false,
      unique: true,
      comment: "N,R,SR,SSR",
    },
    skill1: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
      comment: "技能一",
    },
    skill2: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
      comment: "技能二",
    },
    skill3: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
      comment: "技能三",
    },

  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [
      {
        fields: ['name'],
        unique: true,
      },
    ],
  });
  return Monster;
};