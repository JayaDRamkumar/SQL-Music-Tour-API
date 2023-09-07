// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };

// 'use strict'
// const { DataTypes } = require('sequelize')

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('bands', 'recommendation', {
//         type: DataTypes.STRING
//     })
//   },

//   down: async (queryInterface, Sequelize) => {
//     /*
//      ...
//      */
//   }
// }                

'use strict'
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bands', 'recommendation', {
        type: DataTypes.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bands', 'recommendation')
  }
}                
             
