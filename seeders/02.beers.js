'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Beers', [{
    name: 'Heavenly Body Golden Wheat',
    type: 'Wheat',
    labelPic: 'https://products1.imgix.drizly.com/ci-wellbeing-heavenly-body-non-alcoholic-golden-wheat-03727b2b577ec9df.png?auto=format%2Ccompress&fm=jpg&q=20',
    createdAt: new Date(),
    updatedAt: new Date(),
    info: 'Heavenly Body NA Golden Wheat is an American-Style Wheat that has more flavor than its light lager cousins. We add a hint of Cascade and German Traditional hops for a slight citrus character that balances the lighter malts.',
    BreweryId: 2
  }, {
    name: 'Hellraiser Dark Amber',
    type: 'Amber',
    labelPic: 'https://products3.imgix.drizly.com/ci-wellbeing-hellraiser-non-alcoholic-dark-amber-b4145374580781f2.png?auto=format%2Ccompress&fm=jpg&q=20',
    createdAt: new Date(),
    updatedAt: new Date(),
    info: 'Hellraiser NA Dark Amber is a hop-forward amber that has the perfect balance of floral aroma and spicy hops to delight the palette, making this tasty amber easy to drink anytime or all the time.',
    BreweryId: 2
  }, {
    name: 'Upside Dawn',
    type: 'Blonde',
    labelPic: 'https://cdn.shopify.com/s/files/1/0015/2125/4469/products/Buy_UpsideDawn_GoldenAle_6Pack_1024x1024.png?v=1534944340',
    createdAt: new Date(),
    updatedAt: new Date(),
    info: 'Classic craft golden ale. Refreshing, clean, balanced, light-bodied. Aromas subtle with floral and earthy notes. Brewed with premium organic malts from US & Germany along with combo of English and traditional American hops.',
    BreweryId: 1
  }, {
    name: 'Run Wild',
    type: 'IPA',
    labelPic: 'https://cdn.shopify.com/s/files/1/0015/2125/4469/products/Buy_RunWild_IPA_6Pack_1200x.png?v=1573641129',
    createdAt: new Date(),
    updatedAt: new Date(),
    info: 'Run Wild is the ultimate sessionable IPA for craft beer lovers. Brewed with a blend of five Northwest hops, it has an approachable bitterness to balance the specialty malt body. Always refreshing and only 70 calories.',
    BreweryId: 1
  }
])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Beers', null, {});
  }
};