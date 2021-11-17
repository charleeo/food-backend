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
    
     await queryInterface.addColumn('users', 'type_id', Sequelize.INTEGER);
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('users', 'type_id', Sequelize.INTEGER)
  }
};
