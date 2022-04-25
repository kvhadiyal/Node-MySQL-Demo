'use strict';
const utils = require('../../helper/utils');
const constants = require('../../constants/model');
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'users',
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: [constants.ROLE],
        defaultValue: constants.ROLE.USER,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: [constants.STATUS],
        defaultValue: constants.STATUS.ACTIVE,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: false,
      hooks: {
        beforeCreate: (user) => {
          user.password = utils.hash(user.password);
        },
      },
    }
  );
};
