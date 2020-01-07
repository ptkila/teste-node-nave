'use strict';
const bcrypt = require('bcryptjs');

const User = require('../../app/models').User;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10)),
        role: 'App\\Admin',
      }, ], {});

    const user = await User.findOne({
      where: {
        email: 'admin@admin.com',
      }
    });

    await queryInterface.bulkInsert('Admins',
      [{
        name: 'admin',
        user_id: user.id,
      }, ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};