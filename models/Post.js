const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PostSchema = new Schema(
  {
    title: {},
    location: {},
    description: {},
    // we still need to think how we'll save the photo
    // photo: {},
    like_count: {},
    hate_count: {},
    comments: [{}],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
