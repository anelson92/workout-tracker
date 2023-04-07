// redefining schema for graphQL

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID 
        username: String
        email: String
        password: String
        goals: [Goal]
        workouts: [Workout]
    }

    type Goal {

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(_id: ID!): User
        
    }

    type Mutation {
        newUser(_id: ID!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        deleteUser(_id: ID!): User
        addGoal()
    }
`