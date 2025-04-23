'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('categories', null, {});
  await queryInterface.sequelize.query('ALTER TABLE categories AUTO_INCREMENT = 1;');

  await queryInterface.bulkInsert('categories', [
    { name: 'Coffee', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Tea', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Pastries', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Sandwiches', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Smoothies', createdAt: new Date(), updatedAt: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('categories', null, {});
}
