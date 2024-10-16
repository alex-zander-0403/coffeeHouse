const coffeeRouter = require('express').Router();
const { Coffee } = require('../../db/models');

coffeeRouter.route('/').get(async (req, res) => {
  try {
    const allCoffee = await Coffee.findAll();
    res.json(allCoffee);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка получения всех coffee' });
  }
});
coffeeRouter.route('/:id').patch(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, url } = req.body;
    await Coffee.update({ title, desc, url }, { where: { id } });
    const newCoffee = await Coffee.findByPk(id);
    res.json(newCoffee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка получения one-coffee' });
  }
});

module.exports = coffeeRouter;
