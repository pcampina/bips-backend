'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Partners', 'image', {
        allowNull: true,
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Partners', 'rating', {
        allowNull: true,
        type: Sequelize.INTEGER,
      })
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Partners', 'image'),
      queryInterface.removeColumn('Partners', 'rating')
    ]);
  }
};
