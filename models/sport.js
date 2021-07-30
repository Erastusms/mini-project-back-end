'use strict';
const {
  Model
} = require('sequelize');
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
  };
  Sport.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    status: DataTypes.STRING,
    venue: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    day: DataTypes.STRING,
    date: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sport',
  });
  return Sport;
};