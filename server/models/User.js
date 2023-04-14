const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
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
        minLength: 8
    },
    date: {
        type: String,
        // required: true,
        default: Date.now
    },
    phoneNumber: {
        type: String,
        // required: true
    },
    goals: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Goal'
        }
      ],
      workouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ]
});

// middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare incoming password with hashed password 
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;