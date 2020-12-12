'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Brewery.hasMany(models.Beer)
      models.Beer.belongsTo(models.Brewery)
    }
  };
  Beer.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    labelPic: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;
};