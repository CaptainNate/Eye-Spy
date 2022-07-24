const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const CommentSchema = new Schema(
  {
    comment_text: {
      type: String,
      required: true,
      trim: true,
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
    id: false,
  }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
