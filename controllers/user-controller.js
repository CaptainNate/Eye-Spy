const { User, Post } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .select("-__v")
            .sort({ _id: -1 })
            .then((userDbData) => res.json(userDbData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: "posts",
                select: "-__v",
            })
            .select("-__v")
            .then((userDbData) => res.json(userDbData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // create user
    newUser({ body }, res) {
        User.create(body)
            .then((userDbData) => res.json(userDbData))
            .catch((err) => res.json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
        })
            .then((userDbData) => {
                if (!userDbData) {
                    res.status(404).json({ message: "No user found for this id" });
                    return;
                }
                res.json(userDbData);
            })
            .catch((err) => res.json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete(
            { userId: params.id })
            .then(response => {
                if (!response) {
                    res.status(404).json({ message: 'No user found for this id' });
                    return;
                }
                res.json(response);
            })
        .catch(err => res.json(err));
    },

    // TO-DO: add a favorite post
    addFavorite({ params }, res) {
        // still need to address this logic
    },   

    // TO-DO: remove a favorite post
    deleteFavorite({ params }, res) {
        // still need to address this logic
    },

    // promote user to moderator
    promoteToModerator({ params }, res) {
        User.findOneAndUpdate({ userId: params.id }, {
            $set: {
                "is_moderator": true
            }
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No user found for this id' });
                return;
            }
            res.json(response);
        })
        .catch(err => res.json(err));
    }
};

module.exports = userController;