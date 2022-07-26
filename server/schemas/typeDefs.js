// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    likes: [Post]
    hates: [Post]
    favorites: [Post]
    comments: [Comment]
    is_moderator: Boolean
  }

  type Post {
    _id: ID
    post_title: String
    post_text: String
    createdAt: Date
    location: String
    like_count: Number
    hate_count: Number
    comments: [Comment]
  }

  type Comment {
    _id: ID
    comment_text: String
    username: String
    post: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    newPost(post_text: String!): Post
    newComment(PostId: ID!, comment_text: String!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;