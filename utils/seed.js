const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

User.create(userData, (error, createdUsers) => {
  if (error) {
    console.error(error);
  } else {
    console.log(createdUsers);
  }

  Thought.create(thoughtData, (error, createdThoughts) => {
    if (error) {
      console.error(error);
    } else {
      console.log(createdThoughts);
    }
  });
  

 
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


