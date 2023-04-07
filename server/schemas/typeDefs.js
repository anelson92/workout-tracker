// redefining schema for graphQL

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        goals: [Goal]
        workouts: [Workout]
        
    }

    type Goal {
        _id: ID
        title: String 
        description: String
        date: String
        dueDate: String
        personalBest: String
        bodyWeight: Int
        workoutStreak: Int
        user: User
    }

    type Workout {
        _id: ID!
        exerciseType: String
        dateCreated: String
        reps: Int
        sets: Int
        progress: Int
        user: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(_id: ID!): User
        goals: [Goal]

    }

    type Mutation {
        newUser(_id: ID!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        deleteUser(_id: ID!): User
       
    }
`

module.exports = typeDefs;