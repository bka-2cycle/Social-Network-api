const userData = [  
  // {    username: 'johnDoe',    email: 'john.doe@example.com',    thoughts: [],
  //   friends: []
  // },
  {
    username: 'Ashley',
    email: 'ashley@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Claudia',
    email: 'claudia@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Norma',
    email: 'norma@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Dawn',
    email: 'dawn@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Sue',
    email: 'sue@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'John',
    email: 'john@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Ryan',
    email: 'ryan@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Eddie',
    email: 'eddie@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Cathy',
    email: 'cathy@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'George',
    email: 'george@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Robert',
    email: 'robert@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Sal',
    email: 'sal@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Alexis',
    email: 'alexis@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Yumi',
    email: 'yumi@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
  {
    username: 'Brian',
    email: 'brian@example.com',
    thoughts: [],
    friends: [{type: mongoose.Types.ObjectId, ref: 'User'}]
  },
];


const thoughtData = [
  {
    thoughtText: 'Life is a journey, not a destination.',
    userName: 'Ashley',
    reactions: [
      {
        reactionBody: 'I completely agree!',
        userName: 'Ryan'
      },
      {
        reactionBody: 'Wise words!',
        userName: 'Eddie'
      }
    ]
  },
  {
    thoughtText: 'Happiness is not something you postpone for the future; it is something you design for the present.',
    userName: 'Claudia',
    reactions: [
      {
        reactionBody: 'This is so true!',
        userName: 'John'
      }
    ]
  },
  {
    thoughtText: 'All our dreams can come true, if we have the courage to pursue them.',
    userName: 'Norma',
    reactions: [
      {
        reactionBody: 'This is total BS, dreams never come true!',
        userName: 'Yumi'
      },
      {
        reactionBody: 'Wow, harsh words Yumi!',
        userName: 'Cathy'
      }
    ]
  },

  {
    thoughtText: 'The secret of getting ahead is getting started.',
    userName: 'Dawn',
    reactions: [
      {
        reactionBody: 'I would prefer to start tomorrow.',
        userName: 'Alexis'
      },
      {
        reactionBody: 'Spoken like a true procrastinator.',
        userName: 'Ashley'
      }
    ]
  },
  {
    thoughtText: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    userName: 'Sue',
    reactions: [
      {
        reactionBody: 'Not a fan of trees, I hate raking leaves',
        userName: 'Robert'
      }
    ]
  },
  {
    thoughtText: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
    userName: 'John',
    reactions: [
      {
        reactionBody: 'You know nothing John Snow',
        userName: 'Brian'
      },
      {
        reactionBody: 'Tell the Mother of Dragons that!',
        userName: 'George'
      }
    ]
  },

  {
    thoughtText: 'Its hard to beat a person who never gives up.',
    userName: 'Ryan',
    reactions: [
      {
        reactionBody: 'There is no reward in beating a quitter.',
        userName: 'Sue'
      },
      {
        reactionBody: 'Agreed, its best to quit, and not give your opponent the satisfaction',
        userName: 'Norma'
      }
    ]
  },
  {
    thoughtText: 'I wake up every morning and think to myself, How far can I push this company in the next 24 hours.',
    userName: 'Eddie',
    reactions: [
      {
        reactionBody: 'Glad your not my boss!',
        userName: 'Ryan'
      }
    ]
  },
  {
    thoughtText: 'If people are doubting how far you can go, go so far that you cant hear them anymore.',
    userName: 'Cathy',
    reactions: [
      {
        reactionBody: 'Oh man, talk about silencing the sceptics.',
        userName: 'Dawn'
      },
      {
        reactionBody: 'The doubters are what provide the motivation',
        userName: 'Sal'
      }
    ]
  },

  {
    thoughtText: 'You\'ve got to get up every morning with determination if you\'re going to go to bed with satisfaction.',
    userName: 'George',
    reactions: [
      {
        reactionBody: 'Wow, did you come up with that?',
        userName: 'Eddie'
      },
      {
        reactionBody: 'No, he Googled it.',
        userName: 'Cathy'
      }
    ]
  },
  {
    thoughtText: 'Do one thing every day that scares you.',
    userName: 'Robert',
    reactions: [
      {
        reactionBody: 'My friend tried that, on day one he was killed.',
        userName: 'Alexis'
      }
    ]
  },
  {
    thoughtText: 'Its no use going back to yesterday, because I was a different person then.',
    userName: 'Sal',
    reactions: [
      {
        reactionBody: 'I didn\'t care for Sal yesterday anyway.',
        userName: 'Dawn'
      },
      {
        reactionBody: 'Me neither, glad to meet you today Sal!',
        userName: 'Yumi'
      }
    ]
  },

  {
    thoughtText: 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
    userName: 'Alexis',
    reactions: [
      {
        reactionBody: 'I know everything, I guess that makes me stupid.',
        userName: 'Sal'
      },
      {
        reactionBody: 'Yes, I believe you are Sal.',
        userName: 'Cathy'
      }
    ]
  },
  {
    thoughtText: 'The same boiling water that softens the potato hardens the egg. Its what you\'re made of. Not the circumstances.',
    userName: 'Yumi',
    reactions: [
      {
        reactionBody: 'Thats really deep Yumi, you should read Jack Handy\'s book.',
        userName: 'Claudia'
      }
    ]
  },
  {
    thoughtText: 'People who wonder if the glass is half empty or full miss the point. The glass is refillable.',
    userName: 'Brian',
    reactions: [
      {
        reactionBody: 'Dude, you are incredibly smart.',
        userName: 'Sue'
      },
      {
        reactionBody: 'Yea, I would totally drink the Kool-Aid if you handed it to me.',
        userName: 'Ryan'
      }
    ]
  },
];










// const users = [];

// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
// const getRandomName = () =>
//   `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// // Function to generate random applications that we can add to the database. Includes application tags.
// const getRandomApplications = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       published: Math.random() < 0.5,
//       description: getRandomArrItem(appDescriptions),
//       buildSuccess: Math.random() < 0.5,
//       tags: [...getApplicationTags(3)],
//     });
//   }
//   return results;
// };

// Create the tags that will be added to each application
// const getApplicationTags = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleTags);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       tagBody: getRandomArrItem(possibleTags),
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
// module.exports = { getRandomName, getRandomApplications };



