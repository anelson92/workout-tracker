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
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String,
        default: Date.now
    }
});

/* 
,
    dueDate: {
        type: String,
        required: false
    }
,
    // personalBest: {
    //     type: String,
    //     required: false
    // },
    // bodyWeight: {
    //     type: Number,
    //     required: false
    // },
    // workoutStreak: {
    //     type: Number,
    //     required: false
    }
*/

// possible virtuals 
goalSchema
    .virtual ('personalBestFormatted')
    .get(function () {
        if (this.personalBest) {
        return `${this.personalBest}`;
    }
    return null;
});

goalSchema
    .virtual ('workoutStreakFormatted')
    .get(function () {
        if (this.workoutStreak) {
            return `$(this.workoutStreak) days`;
        }
        return null;
});
    

const Goal = mongoose.model('Goal', goalSchema);
module.exports = {Goal};