// const faker = require('faker');
const userSeeds = require("./user-seeds.json");
const postSeeds = require("./post-seeds.json");
const commentSeeds = require("./comment-seeds");
const db = require("../config/connection");
const { User, Post, Comment } = require("../models");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Comment.deleteMany({});
    await Post.deleteMany({});
    
    // creating all users
    await User.create(userSeeds);

    // creating posts and connecting to users
    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, username } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }

    // creating comments and connecting to users and posts
    for (let i = 0; i < commentSeeds.length; i++) {
      // creating comment as is
      const { _id, username, post_title } = await Comment.create(
        commentSeeds[i]
      );
      // connecting to user
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
      // connecting to posts
      const post = await Post.findOneAndUpdate(
        { post_title: post_title },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
