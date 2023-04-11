// const mongoose = require('mongoose');
// const config = require('../config/connection');
const User = require('./User'); //is this the correct file path?
const Goal = require('./Goal');
const Workout = require('./Workout');


// mongoose.connect('mongodb://127.0.0.1:27017/workout-tracker');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('Connected to MongoDB'));

module.exports = {
  User,
  Goal,
  Workout
};
