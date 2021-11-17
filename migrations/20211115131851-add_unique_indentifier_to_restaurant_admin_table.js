'use strict';

module.exports = {
    /**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').QueryInterface} QueryInterface
 */

/**
 * @param {QueryInterface} queryInterface
 * @param {Sequelize} Sequelize
 * @returns
 */
 up: async (queryInterface, Sequelize) => {
    
  await queryInterface.addColumn('restaurantusers', 'restaurant_identifier', Sequelize.STRING);
  await queryInterface.addColumn('restaurants','restaurant_identifier',Sequelize.STRING )
  
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('restaurantusers', 'restaurant_identifier', Sequelize.STRING)
  await queryInterface.removeColumn('restaurants','restaurant_identifier',Sequelize.STRING )
}
};
