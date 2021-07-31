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
            message: "This field can't be empty!",
          },
        },
      },
      code: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "This field can't be empty!",
          },
        },
      },
      flagImage: {
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
        beforeCreate(countries, options) {
          let countryName = countries.name;
          let countryCode = [
            "JPN",
            "AUS",
            "CRO",
            "CZE",
            "FRA",
            "GER",
            "HUN",
            "SUI",
            "BRA",
            "NOR",
            "GBR",
            "THA",
            "ESP",
            "INA",
            "BEL",
            "UKR",
            "TUR",
            "ARG",
            "FIN",
            "POR",
          ];

          let name = [
            "Japan",
            "Australia",
            "Croatia",
            "Czech Republic",
            "France",
            "Germany",
            "Hungary",
            "Switzerland",
            "Brazil",
            "Norway",
            "Great Britain",
            "Thailand",
            "Spain",
            "Indonesia",
            "Belgium",
            "Ukraine",
            "Turkey",
            "Argentina",
            "Finland",
            "Portugal",
          ];

          for (let i = 0; i < name.length; i++) {
            if (countryName === name[i]) {
              countries.code = countryCode[i];
              countries.flagImage = `https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/${countryCode[i]}.png`;
            }
          }
        }
      },
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
