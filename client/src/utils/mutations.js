import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation Mutation($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
  }
`;

export const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
        user {
            _id
            username
            email
        }
        }
    }
`;

// not too sure about this one
export const LOGOUT = gql`
    mutation Mutation {
        logout {
        _id
        }
    }
`;

export const ADD_GOAL = gql`
    mutation Mutation($userId: String, $title: String, $description: String) {
        addNewGoal(userId: $userId, title: $title, description: $description) {
        _id
        title
        description
        date
        }
  }
`;

export const REMOVE_GOAL = gql`
    mutation RemoveGoal($id: ID) {
        removeGoal(_id: $id) {
        _id
        }
    }
`;

export const ADD_WORKOUT = gql`
    mutation Mutation($userId: String, $title: String, $type: String, $description: String) {
        addWorkout(userId: $userId, title: $title, type: $type, description: $description) {
        _id
        title
        description
        type
        date
        userId
        }
    }
`;

export const REMOVE_WORKOUT = gql`
    mutation RemoveWorkout($id: ID) {
        removeWorkout(_id: $id) {
        _id
        }
    }
`;