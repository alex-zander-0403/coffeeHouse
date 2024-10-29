const coffeeRouter = require('express').Router();
const { Coffee } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

coffeeRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allCoffee = await Coffee.findAll({ order: [['id', 'DESC']] });
      res.json(allCoffee);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения всех coffee' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { title, desc, url } = req.body;
      const { id } = res.locals.user;
      const newCoffee = await Coffee.create({
        title,
        desc,
        url: url || '1-default.jpg',
        userId: id,
      });
      res.status(201).json(newCoffee);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка создания нового coffee' });
    }
  });

//
coffeeRouter
  .route('/:id')
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, desc, url } = req.body;
      await Coffee.update({ title, desc, url }, { where: { id } });
      const newCoffee = await Coffee.findByPk(id);
      res.json(newCoffee);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения one-coffee' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Coffee.destroy({ where: { id } });
      res.sendStatus(200); //
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка удаления one-coffee' });
    }
  });

module.exports = coffeeRouter;
