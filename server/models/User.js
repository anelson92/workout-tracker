// username, password, email, phone number (for reminder texts, maybe)
<<<<<<< HEAD
const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            format: email 
        }
    }
)
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = {User};
>>>>>>> 5f45a726e3c8f073eb858c960e5b2cc9e83571a3
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
