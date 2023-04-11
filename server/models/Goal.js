// personal best(maybe), body weight, workout streak
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    personalBest: {
        type: String,
        required: false
    },
    bodyWeight: {
        type: Number,
        required: false
    },
    workoutStreak: {
        type: Number,
        required: false
    }
});

const Goal = mongoose.model('Goal', goalSchema);
module.exports = {Goal};