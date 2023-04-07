const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const User = require('./user'); //is this the correct file path?
const Goal = require('./goal');
const Workout = require('./workout');

module.exports = {
  User,
  Goal,
  Workout
};
