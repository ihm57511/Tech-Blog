const router = require('express').Router();
const { Article, Comments, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll();

    const articles = JSON.parse(JSON.stringify(articleData));
    res.render('article-details', {
      articles,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});