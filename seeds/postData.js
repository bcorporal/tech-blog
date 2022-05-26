const { Post } = require('../models');

const postdata =

[
  {
    "postTitle": "Wow",
    "postContent": "This app is cool",
    "userId": 1
  },
  {
    "postTitle": "Debate",
    "postContent": "Mac or Windows?",
    "userId": 2
  },
  {
    "postTitle": "Bootstrap",
    "postContent": "Does anyone like the framework or Bulma?",
    "userId": 3
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost; 
