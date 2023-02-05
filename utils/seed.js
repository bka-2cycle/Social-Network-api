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
  

  console.table(createdUsers);
  console.table(createdThoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});






// const connection = require('../config/connection');
// const { User, Thought } = require('../models');
// const { getRandomUser, getRandomThought } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');
//   await Thought.deleteMany({});
//   await User.deleteMany({});

//   const users = [];
//   const thoughts = getRandomThought(10);

//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomUser();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];

//     users.push({
//       first,
//       last,
//       age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
//     });
//   }

//   await User.collection.insertMany(users);
//   await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
//   console.table(users);
//   console.table(thoughts);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
