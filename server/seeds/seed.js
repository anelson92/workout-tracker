const db = require('../config/connection.js');
const { Goal } = require('../models/Goal.js')
const goalSeeds = require('./goalSeed.json')

db.once('open', async () => {
  try {
    // await Profile.deleteMany({});
    // await Profile.create(profileSeeds);

    await Goal.create(goalSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
