const { Post, User } = require('../models');

const postController = {
    // get all posts
    getAllPosts(req, res) {
        Post.find({})
            .populate({
                path: "comments",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((postDbData) => res.json(postDbData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one post by id
    getPostsById({ params }, res) {
        Post.findOne({ _id: params.id })
            .populate({
                path: "comments",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((postDbData) => {
                if (!postDbData) {
                    res.status(404).json({
                        message: "No post found for this id",
                    });
                    return;
                }
                res.json(postDbData);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // create post
    newPost({ body }, res) {
        Post.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.user_id },
                    { $push: { posts: _id } },
                    { new: true }
                );
            })
            .then((postDbData) => {
                if (!postDbData) {
                    res.status(404).json({
                        message: "No user found with this id!",
                    });
                    return;
                }
                res.json(postDbData);
            })
            .catch((err) => res.json(err));
    },

    // update post by id
    updatePost({ params, body }, res) {
        Post.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
        })
            .then((postDbData) => {
                if (!postDbData) {
                    res.status(404).json({
                        message: "No posts found for this id",
                    });
                    return;
                }
                res.json(postDbData);
            })
            .catch((err) => res.json(err));
    },

    // delete post
    deletePost({ params }, res) {
        Post.findOneAndDelete({ _id: params.id })
            .then((postDbData) => {
                if (!postDbData) {
                    res.status(404).json({
                        message: "No posts found for this id",
                    });
                    return;
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { posts: params.Id } },
                    { new: true }
                );
            })
            .then((userDbData) => {
                if (!userDbData) {
                    res.status(404).json({
                        message: "No User found for this id",
                    });
                    return;
                }
                res.json(userDbData);
            })
            .catch((err) => res.json(err));
    },

    // post a comment
    newComment({ params, body }, res) {
        Post.findOneAndUpdate(
            { _id: params.postId },
            { $push: { comments: body } },
            { new: true, runValidators: true }
        )
            .populate({ path: "comments", select: "-__v" })
            .select("-__v")
            .then((postDbData) => {
                if (!postDbData) {
                    res.status(404).json({
                        message: "No post found for this id",
                    });
                    return;
                }
                res.json(postDbData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // delete a comment
    deleteComment({ params }, res) {
        Post.findOneAndUpdate(
            { _id: params.postId },
            { $pull: { comments: { commentId: params.commentId } } },
            { new: true }
        )
            .then((postDbData) => res.json(postDbData))
            .catch((err) => res.json(err));
    },
};

module.exports = postController;