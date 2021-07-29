"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.belongsToMany(models.Sport, { through: "models.Athlete" });
    }
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Country name cannot be empty!",
          },
        },
      },
      code: DataTypes.STRING,
      flagImage: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Flag Image cannot be empty!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(country, options) {
          let countryName = country.name;
          let countryCode = ["INA", "GER", "JPN", "ITA", "NED"];
          let name = ["Indonesia", "Germany", "Japan", "Italy", "Netherlands"];

          for (let i = 0; i < name.length; i++) {
            if (countryName === name[i]) {
              country.code = countryCode[i];
            }
          }
        },

        beforeUpdate(country, options) {
          let countryName = country.name;
          let countryCode = ["INA", "GER", "JPN", "ITA", "NED"];
          let name = ["Indonesia", "Germany", "Japan", "Italy", "Netherlands"];

          for (let i = 0; i < name.length; i++) {
            if (countryName === name[i]) {
              country.code = countryCode[i];
            }
          }
        },
      },
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
