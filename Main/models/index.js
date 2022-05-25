const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'userId',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',

});

module.exports = {
  User,
  Comment,
  Post
};





Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
