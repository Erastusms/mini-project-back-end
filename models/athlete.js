"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Athlete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Athlete.belongsTo(models.Country);
      Athlete.belongsTo(models.Sport);
    }
  }
  Athlete.init(
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
          isNumeric: {
            message: "This field must be a number",
          },
        },
      },
      CountryId: DataTypes.INTEGER,
      SportId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Athlete",
    }
  );
  return Athlete;
};
