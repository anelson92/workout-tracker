import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Query {
        users {
        _id
        username
        email
        phoneNumber
        }
    }
`

export const QUERY_ONE_USER = gql`
    query Query {
        oneUser {
        _id
        username
        email
        password
        phoneNumber
        goals {
            _id
            title
            description
            date
        }
        workouts {
            _id
            title
            description
            type
            date
            userId
        }
        }
    }
`;

export const QUERY_ME = gql`
    query Query {
        me {
        _id
        username
        email
        password
        phoneNumber
        goals {
            _id
            title
            description
            date
        }
        workouts {
            _id
            title
            description
            type
            date
            userId
        }
        }
    }
`;

