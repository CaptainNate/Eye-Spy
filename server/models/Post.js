const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PostSchema = new Schema(
  {
    post_title: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxLength: 200,
    },
    post_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 5000,
    },
    category: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dateFormat(createdAt),
    },
    // location may change according to Google API implementation
    location: {
      type: String,
      required: false,
      unique: false,
    },
    img: {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
    username: {
      type: String,
      required: true,
    },
    like_count: {
      type: Number,
      default: 0,
    },
    hate_count: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// returns the number of comments a Post has
PostSchema.virtual("commentsCount").get(function () {
  return this.comments.length;
});

const Post = model("Post", PostSchema);

module.exports = Post;
