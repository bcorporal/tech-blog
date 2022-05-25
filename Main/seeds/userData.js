const { User } = require('../models');

const userdata =

[
  {
    "username": "Sal",
    "password": "password12345"
  },
  {
    "username": "Sal",
    "password": "password12345"
  },
  {
    "username": "Sal",
    "password": "password12345"
  }, 
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
