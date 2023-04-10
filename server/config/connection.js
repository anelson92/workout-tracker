const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/workout-tracker',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

