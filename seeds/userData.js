const { User } = require('../models');

const userdata =

[
  {
    "username": "Joe",
    "password": "password12345"
  },
  {
    "username": "Rob",
    "password": "password12345"
  },
  {
    "username": "Ryan",
    "password": "password12345"
  }, 
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
