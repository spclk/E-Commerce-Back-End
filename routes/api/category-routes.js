const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const getAllCategories = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(getAllCategories);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const getOneCategory = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(getOneCategory);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const postRoute = await Category.create(req.body);
    res.status(200).json(postRoute);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const putRoute = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(putRoute);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteRoute = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteRoute);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
