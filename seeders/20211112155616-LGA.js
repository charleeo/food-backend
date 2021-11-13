'use strict';
const states = require('../custom-data/states.json')
const lgas = require('../custom-data/local_governments.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    console.log(states.length)
   for(let i =0; i < states.length;i++){
     await queryInterface.bulkInsert('State', [{
      name: states[i]['name'],
     }], {});

  }
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

// // # seeders/xxxxxxx-default-superuser.js'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const password =  process.env.SEED_SUPERUSER_PASSWORD || 'defaultpassword';
//     return queryInterface.bulkInsert('superuser', [{
//       email: 'admin@agenkan.com',
//       password: 'yourpasswordehre',
//       role: 'admin',
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('superuser', { email: 'admin@agenkan.com' }, {});
//   }
// };
