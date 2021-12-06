const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagInfo = await Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  res.json(tagInfo);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagInfo = await Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      through: ProductTag,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(tagInfo);
});

router.post("/", async (req, res) => {
  // create a new tag
  const tagInfo = await Tag.create(req.body)
  .catch((err) => {
    res.json(err);
  }).catch((err) => {
    res.json(err);
  });
  res.json(tagInfo);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const tagInfo = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(tagInfo);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
    const tagInfo = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.json(err);
    });
    res.json(tagInfo);
  });

module.exports = router;
