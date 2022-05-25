const { Post } = require('../models');

const postdata =

[
  {
    "postTitle": "Music Near Me",
    "postContent": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "userId": 1
  },
  {
    "postTitle": "Music Near Me",
    "postContent": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "userId": 2
  },
  {
    "postTitle": "Music Near Me",
    "postContent": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "userId": 3
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost; 
