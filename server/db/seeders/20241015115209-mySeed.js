'use strict';

const { User, Coffee } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      { name: 'Alex', email: '111@111', password: '111' },
      { name: 'Bob', email: '222@222', password: '222' },
      { name: 'Carl', email: '333@333', password: '333' },
    ]);
    await Coffee.bulkCreate([
      {
        title: 'Эспрессо с ноткой шоколада',
        desc: 'Нежный эспрессо с легкой сладостью шоколада. Идеальный выбор для тех, кто ищет классику с изюминкой.',
        url: '',
        userId: 1,
      },
      {
        title: 'Латте с карамелью',
        desc: 'Сбалансированный латте с насыщенным вкусом карамели. Отлично согреет в холодный день.',
        url: 'http://example.com/latte-caramel',
        userId: 2,
      },
      {
        title: 'Американо с ванилью',
        desc: 'Классический американо с легкой ноткой ванили. Идеально подходит для утреннего пробуждения.',
        url: 'http://example.com/americano-vanilla',
        userId: 2,
      },
      {
        title: 'Капучино с корицей',
        desc: 'Насыщенный капучино с ароматом корицы. Классика, которая никогда не подведет.',
        url: 'http://example.com/cappuccino-cinnamon',
        userId: 3,
      },
      {
        title: 'Мокка с маршмеллоу',
        desc: 'Шоколадный мокка с кусочками маршмеллоу. Идеальный десертный кофе для сладкоежек.',
        url: 'http://example.com/mocha-marshmallow',
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
