const router = require('express').Router();
const { Article, Comments, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll();

    const articles = JSON.parse(JSON.stringify(articleData));
    res.render('homepage', {
      articles,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/article/:id', async (res, req) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: Comments, model: User,
        },
      ],
    });

    const article = JSON.parse(JSON.stringify(articleData));
    res.render('article', { article });
  } catch (err) {
    res.status(500).json(err)
  }
});