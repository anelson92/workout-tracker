const db = require('../config/connection.js');
const { Goal } = require('../models/Goal');
const { User } = require('../models/User');
const { Workout } = require('../models/Workout');
const goalSeeds = require('./goalSeed.json');
const userSeeds = require('./userSeed.json');
// const workoutSeeds = require('./workoutSeed.json')

db.once('open', async () => {
  try {
    
    await Goal.create(goalSeeds);
    await User.create(userSeeds);
    // await Workout.create(workoutSeeds);
    

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
