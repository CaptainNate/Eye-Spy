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

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            posts: _id,
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
