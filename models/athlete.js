'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Athlete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Athlete.belongsTo(models.Country)
      Athlete.belongsTo(models.Sport)
    }
  };
  Athlete.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "First name cannot be empty!"
        }
      }
    },

    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Last name cannot be empty!"
        }
      }
    },
    CountryId: DataTypes.INTEGER,
    SportId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Athlete',
  });
  return Athlete;
};