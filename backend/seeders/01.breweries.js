'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Breweries', [{
    name: 'Athletic Brewing Company',
    city: 'Stratford',
    state: 'CT',
    createdAt: new Date(),
    updatedAt: new Date(),
    website: 'https://athleticbrewing.com/'
  }, {
    name: 'Wellbeing Brewing Company',
    city: 'Maryland Heights',
    state: 'MO',
    createdAt: new Date(),
    updatedAt: new Date(),
    website: 'https://wellbeingbrewing.com/'
  },
])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Breweries', null, {});
  }
};