import { gql } from "@apollo/client";

// need to add mutations for ADD_USER with email and password parts
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// need to add mutations for LOGIN_USER with email and password
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const NEW_POST = gql`
// mutation NewPost($postTitle: String!, $postText: String!, $category: String, $location: String, $img: String) {
//   newPost(post_title: $postTitle, post_text: $postText, category: $category, location: $location, img: $img) {
//     post_title
//     post_text
//   }
// }
// `;
// export const NEW_POST = gql`
//   mutation newPost($post_title: String!, $post_text: String!, $location: String, $category: String, $img: String) {
//     newPost(post_title: $post_title, post_text: $post_text, location: $location, category: $category, img: $img) {

//       post {
//         _id
//         img
//         post_title
//         category
//         post_text
//         location
//         createdAt
//       }
//     }
//   }
// `;


export const NEW_POST = gql`
  mutation newPost($post_text: String!) {
    newPost(post_text: $post_text) {
      _id
      img
      post_title
      category
      post_text
      location
      createdAt
    }
  }
`;