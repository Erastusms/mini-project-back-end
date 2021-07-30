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
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
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
