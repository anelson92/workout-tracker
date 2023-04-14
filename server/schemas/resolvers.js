const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { Goal } = require('../models/Goal');
const { Workout } = require('../models/Workout');
const { signToken } = require('../utils/auth');
const { ObjectId } = require('mongodb');


const resolvers = {

    // find all users
    Query: { 
        users: async () => {
            return User.find();
        },

        // find one user
        oneUser: async (parent, {_id}) => {

            console.log(_id)
            return User.findOne({_id});
        },
        // find the users' info that is logged in 
        userLoggedIn: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You must be logged in to do that!');
        },
        
    },

    Mutation: {
        // create new user 
        addUser: async (parent, args) => {
            const { username, email, password, phoneNumber, goals, workouts } = args;
            const user = await User.create({ username, email, password, phoneNumber, goals, workouts });
            const token = signToken(user);
          
            return { user, token };
          },
        // login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No user with that email!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        // add goal, not sure about args?
        addGoal: async (parent, args, context) => {
            if(context.user) {

                const goal = await Goal.create({...args, username: context.user.username})

                 await User.findByIdAndUpdate(
                    {_id: context.user._id},
                     {$push: {goals: goal._id}},
                    {new: true, runValidators: true}
                     )

                return goal
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },
        // remove goal
        removeGoal: async (parent, { id }, context) => {
            if (context.user) {
                return Goal.findByIdAndDelete(
                    { _id: context.user._id },
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
                    { _id: context.user._id },
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
                    { _id: context.user._id },
                    { $pull: { workouts: Workout }},
                    { new: true }
                )
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },

    }
}

module.exports = resolvers;