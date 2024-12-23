'use strict';

const bcrypt = require('bcrypt');

const { User, Coffee } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Alex',
        email: '111@111',
        password: bcrypt.hashSync('111', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: '222@222',
        password: bcrypt.hashSync('222', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carl',
        email: '333@333',
        password: bcrypt.hashSync('333', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Coffee.bulkCreate([
      {
        title: 'Звездная Пыль',
        desc: 'Этот кофе создан из зерен, собранных на высоте, где атмосфера настолько тонка, что звезды кажутся близкими. Зерна обжариваются под воздействием ультрафиолетового излучения, придавая напитку невероятный металлический оттенок и легкий привкус космической пыли.',
        url: '1-star-dust-coffee.jpg',
        userId: 1,
      },
      {
        title: 'Эликсир Вечности',
        desc: 'Кофе, выращенный на плантациях, которые существуют вне времени и пространства. Каждое зерно содержит в себе каплю эликсира, который дарует не только бодрость, но и ощущение вечной молодости.',
        url: '1-elixir-of-eternity.jpg',
        userId: 2,
      },
      {
        title: 'Черная Дыра',
        desc: 'Этот кофе создан из зерен, которые были поглощены черной дырой и выброшены обратно через кротовую нору. Он имеет интенсивный, почти космический вкус, с нотками черного перца и темного шоколада.',
        url: '1-black-hole-coffee.jpg',
        userId: 2,
      },
      {
        title: 'Аромат Туманности',
        desc: 'Кофе, выращенный в атмосфере туманности, где каждое зерно пропитано ароматом звездной пыли и легким запахом цветов, растущих только в этих условиях. Напиток обладает нежным, легким вкусом с нотками ванили и миндаля.',
        url: '1-nebula-scent-coffee.jpg',
        userId: 3,
      },
      {
        title: 'Космический Шторм',
        desc: 'Этот кофе создан из зерен, которые были захвачены в космическом шторме, где они подвергались воздействию энергии и света. Вкус напитка динамичный, с резкими переходами от горького до сладкого, напоминающими бурю на планете с двойной звездой.',
        url: '1-cosmic-storm-coffee.jpg',
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
