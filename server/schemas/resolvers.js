const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { Goal } = require('../models/Goal');
const { Workout } = require('../models/Workout');
const { signToken } = require('../utils/auth');


const resolvers = {

    // find all users
    Query: { 
        users: async () => {
            return User.find();
        },

        // find one user
        user: async (parent, { userId}) => {
            return User.findOne({ _id: userId });
        },
        // find the users' info that is logged in 
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You must be logged in to do that!');
        },
    },

    Mutation: {
        // create new user 
        addUser: async (parent, { name, email, password, phoneNumber }) => {
            const user = await User.create({ name, email, password, phoneNumber });
            const token = signToken(user);

            return { token, user };
        },
        // login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No user with that email!');
            }

            const correctPw = await profile.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        // add goal, not sure about args?
        addGoal: async (parent, { title, description, dueDate }, context) => {
            if(context.user) {
                return Goal.findOneAndUpdate(
                    { _id: User },
                    { $addToSet: { goals: Goal }},
                    { new: true, runValidators: true }
                )
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },
        // remove goal
        removeGoal: async (parent, { id }, context) => {
            if (context.user) {
                return Goal.findByIdAndDelete(
                    { _id: id },
                    { $pull: { goals: Goal }},
                    { new: true }
                )
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },
        // add workout
        addWorkout: async (parent, { exerciseType, reps, sets, progress }, context) => {
            if(context.user) {
                return Workout.findOneAndUpdate(
                    { _id: id },
                    { $addToSet: { workouts: Workout }},
                    { new: true, runValidators: true }
                )
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },
        // remove workout 
        removeWorkout: async (parent, { id }, context) => {
            if (context.user) {
                return Workout.findByIdAndDelete(
                    { _id: id },
                    { $pull: { workouts: Workout }},
                    { new: true }
                )
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },

    }




















    Query: {
        goals: async () => {
            return Goal.find();
        }
    }
}

module.exports = resolvers;