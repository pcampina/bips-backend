'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Partners', // name of Source model
      'CategoryId', // name of the key we're adding
      {
        type: Sequelize.UUID,
        references: {
          model: 'Categories', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Partners', // name of Source model
      'CategoryId' // key we want to remove
    );
  }
};
