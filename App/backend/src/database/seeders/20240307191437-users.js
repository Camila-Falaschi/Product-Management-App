'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('users', [
    {
      id: 1,
      email: 'email@email.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      // senha: --adm2@21!!--
    },
  ], {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});
}