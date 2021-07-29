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
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      status: DataTypes.STRING,
      venue: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(sport, options) {
          sport.status = "Available";
        },
      },
      sequelize,
      modelName: "Sport",
    }
  );
  return Sport;
};
