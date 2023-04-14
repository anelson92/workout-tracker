// redefining schema for graphQL

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        phoneNumber: String
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
    }

    type Workout {
        _id: ID
        title: String
        description: String
        type: String
        date: String
        userId: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        oneUser(_id: ID): User
        me: User
        goals: [Goal]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, phoneNumber: String, goals: String, workouts: String): Auth
        login(email: String!, password: String!): Auth
        logout: User
        addNewGoal(userId: String, title: String, description: String): Goal
        removeGoal(_id: ID): Goal
        addWorkout(userId: String, title: String, description: String, type: String): Workout
        removeWorkout(_id: ID): Workout
    }
`

module.exports = typeDefs;