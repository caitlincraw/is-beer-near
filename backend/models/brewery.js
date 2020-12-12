'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Brewery.init({
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brewery',
  });
  return Brewery;
};