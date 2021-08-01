"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sport.belongsToMany(models.Country, { through: "models.Athlete" });
    }
  }
  Sport.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      logo: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      venue: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      updatedQuota: {
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
      quota: {
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
      day: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      date: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      detail: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(sport, options) {
          sport.status = "Available";
          sport.updatedQuota = sport.quota;
        },
        beforeUpdate(sport, options) {
          sport.status = "Available";
          sport.updatedQuota = sport.quota;
        },
      },
      sequelize,
      modelName: "Sport",
    }
  );
  return Sport;
};
