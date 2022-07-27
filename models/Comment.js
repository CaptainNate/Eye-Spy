const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const CommentSchema = new Schema(
  {
    comment_text: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dateFormat(createdAt),
    },
    username: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
