const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Article, User} = require('../models');

const seedArticle = require('./articleData');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const articles = await Article.bulkCreate(articleData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();