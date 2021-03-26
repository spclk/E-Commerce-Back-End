const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try {
    const getAllTags = await Tag.findAll({
      include: [
        { model: Product, through: ProductTag, as: 'tag_id' },
      ],
    });
    res.status(200).json(getAllTags);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    const getOneTag = await Tag.findByPk({
      include: [
        { model: Product, through: ProductTag, as: 'tag_id' },
      ],
    });
    res.status(200).json(getOneTag);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const postRoute = await Tag.create(req.body);
    res.status(200).json(postRoute);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const putRoute = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(putRoute);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteRoute = await Tag.destroy({
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
