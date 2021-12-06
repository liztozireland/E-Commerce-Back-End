const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryInfo = await Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryInfo);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryInfo = await Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryInfo);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryInfo = await Category.create(req.body)
  .catch((err) => {
    res.json(err);
  });
  res.json(categoryInfo);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryInfo = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryInfo);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryInfo = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryInfo);
});

module.exports = router;
