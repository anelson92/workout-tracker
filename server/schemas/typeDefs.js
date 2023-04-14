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
        oneUser(_id: ID): User
        userLoggedIn: User
        goals: [Goal]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, phoneNumber: String, goals: String, workouts: String): Auth
        login(email: String!, password: String!): Auth
        addGoal(_id: ID, title: String, description: String, dueDate: String): Goal
        removeGoal(_id: ID): Goal
        addWorkout(_id: ID, exerciseType: String, reps: Int, sets: Int, progress: Int): Workout
        removeWorkout(_id: ID): Workout
    }
`

module.exports = typeDefs;