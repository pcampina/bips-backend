'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Partners', 'address', {
        allowNull: true,
        type: Sequelize.STRING
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Partners', 'address')
    ]);
  }
};
