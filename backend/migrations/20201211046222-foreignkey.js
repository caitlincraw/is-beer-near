'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Beers',
      'BreweryId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Breweries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
  }
};