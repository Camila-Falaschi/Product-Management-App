'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('products', [
    {
      id: 1,
      name: 'Xiaomi Redmi 9',
      brand: 'Xiaomi',
      model: 'Redmi 9',
      price: 1500,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S10',
      brand: 'Samsung',
      model: 'S10',
      price: 1700,
    },
    {
      id: 3,
      name: 'Apple iPhone X',
      brand: 'Apple',
      model: 'iPhone X',
      price: 1900,
    },
    {
      id: 4,
      name: 'OnePlus Nord 2',
      brand: 'OnePlus',
      model: 'Nord 2',
      price: 1800,
    },
    {
      id: 5,
      name: 'Huawei P30',
      brand: 'Huawei',
      model: 'P30',
      price: 1700,
    },
    {
      id: 6,
      name: 'LG V30',
      brand: 'LG',
      model: 'V30',
      price: 1800,
    },
  ], {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', null, {});
}