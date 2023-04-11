const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
// const { signToken } = require('../utils/auth');
const { Goal } = require('../models/Goal');

const resolvers = {
    Query: {
        goals: async () => {
            return Goal.find();
        }
    }
}

module.exports = resolvers;