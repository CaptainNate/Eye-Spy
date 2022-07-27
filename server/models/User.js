const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 32,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    hates: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    is_moderator: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dateFormat(createdAt),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// returns the number of comments a user has
UserSchema.virtual("commentsCount").get(function () {
  return this.comments.length;
});

// returns the number of likes a user has
UserSchema.virtual("likesCount").get(function () {
  return this.likes.length;
});

// returns the number of hates a user has
UserSchema.virtual("hatesCount").get(function () {
  return this.hates.length;
});

// returns the number of favorites a user has
UserSchema.virtual("favoritesCount").get(function () {
  return this.favorites.length;
});

// returns the number of posts a user has
UserSchema.virtual("postsCount").get(function () {
  return this.posts.length;
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
