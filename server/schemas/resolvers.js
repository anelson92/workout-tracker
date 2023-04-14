const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User')
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
        oneUser: async (parent, {_id}) => {
            console.log(_id)
            return User.findOne({_id});
        },
        // find the users' info that is logged in 
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
      },
        
    },

    Mutation: {
        // create new user 
        addUser: async (parent, args) => {
            const { username, email, password, phoneNumber, goals, workouts } = args;
            const user = await User.create({username, email, password, phoneNumber, goals, workouts});
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
        logout: async (parent, args, context) => {

        },
        addNewGoal: async (parent, { userId, title, description }, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            if (context.user) {
              const newGoal = await Goal.create({userId, title, description})
              return newGoal;
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw new AuthenticationError('You need to be logged in!');
          },

        // remove goal
        removeGoal: async (parent, { _id }, context) => {
            if (context.user) {
                const removeGoal = await Goal.findOneAndRemove({_id: _id})
                return removeGoal
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },
        addWorkout: async (parent, { userId, title, description, type }, context) => {
            if (context.user) {
              const newWorkout = await Workout.create({userId, title, description, type})
              return newWorkout;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        removeWorkout: async (parent, { _id }, context) => {
            if (context.user) {
                const removeWorkout = await Workout.findOneAndRemove({_id: _id})
                return removeWorkout
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        },

    }
}

module.exports = resolvers;