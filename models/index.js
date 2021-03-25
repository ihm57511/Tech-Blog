const User = require('./user');
const Comments = require('./comments');
const Article = require('./article');

Article.belongsTo(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Article.hasMany(Comments, {
  foreignKey: 'articleId',
  onDelete: 'CASCADE',
});

module.exports = { User, Comments, Article };