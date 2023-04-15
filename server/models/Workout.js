// workout types, reps, sets, progress
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    date: {
        type: String,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    



   /* 
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
   
   */
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = {Workout};