import gql from "@apollo/client";

// need to add mutations for ADD_USER with email and password parts
export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// need to add mutations for LOGIN_USER with email and password
export const LOGIN_USER = gql``;
