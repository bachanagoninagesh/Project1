'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', null, {});

  await queryInterface.bulkInsert('products', [
    // Coffee
    {
      name: 'Espresso',
      price: 3.0,
      description: 'Strong and bold coffee shot.',
      imageUrl: '/images/espresso.jpg',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Cappuccino',
      price: 3.5,
      description: 'Espresso with steamed milk and foam.',
      imageUrl: '/images/cappuccino.jpg',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Tea
    {
      name: 'Green Tea',
      price: 2.5,
      description: 'Fresh and healthy green tea.',
      imageUrl: '/images/greentea.jpg',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Chai Latte',
      price: 3.0,
      description: 'Spiced tea with milk and foam.',
      imageUrl: '/images/chailatte.jpg',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Pastries
    {
      name: 'Croissant',
      price: 2.0,
      description: 'Flaky and buttery French pastry.',
      imageUrl: '/images/croissant.jpg',
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Blueberry Muffin',
      price: 2.5,
      description: 'Moist muffin filled with blueberries.',
      imageUrl: '/images/muffin.jpg',
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Sandwiches
    {
      name: 'Turkey Club',
      price: 5.0,
      description: 'Turkey, bacon, lettuce, tomato on toasted bread.',
      imageUrl: '/images/turkeyclub.jpg',
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Veggie Wrap',
      price: 4.5,
      description: 'Wrap with fresh vegetables and hummus.',
      imageUrl: '/images/veggiewrap.jpg',
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Smoothies
    {
      name: 'Strawberry Banana',
      price: 4.0,
      description: 'Classic blend of strawberries and bananas.',
      imageUrl: '/images/strawbanana.jpg',
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mango Pineapple',
      price: 4.5,
      description: 'Tropical smoothie with mango and pineapple.',
      imageUrl: '/images/mangopineapple.jpg',
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', null, {});
}
