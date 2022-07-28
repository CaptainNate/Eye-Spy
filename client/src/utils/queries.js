import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query posts($username: String) {
    posts(username: $username) {
      _id
      post_title
      post_text
      createdAt
      location
      like_count
      hate_count
      comments {
        _id
        comment_text
        username
        post
      }
    }
  }
`;

export const QUERY_POST = gql`
query posts($id: ID) {
    posts(_id): $id) {
      _id
      post_title
      post_text
      createdAt
      location
      like_count
      hate_count
      comments {
        _id
        comment_text
        username
        post
      }
    }
  }
`;


export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        email
        password
        posts {
            _id
            post_title
            post_text
            createdAt
            location
            like_count
            hate_count
            comments {
                _id
                comment_text
                username
                post
            }
        }
        likes {
           _id
           post 
        }
        hates {
            _id
            hates
        }
        favorites {
            // not sure what to put in favorites
            _id
            username
        }
        comments {
            _id
            comment_text
            username
            post
        }
    }
} 
`;

export const QUERY_ME = gql`

`;

export const QUERY_ME_BASIC = gql`

`;