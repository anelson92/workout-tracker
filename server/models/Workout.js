// workout types, reps, sets, progress
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exerciseType: {
        type: String,
        required: true
    },
    date: {
        type: String,
        // required: true,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"

    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    progress: {
        type: Number,
        required: true
    }
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = {Workout};