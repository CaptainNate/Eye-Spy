const router = require('express').Router();
const { getAllUsers, newUser, getUserById, updateUser, deleteUser, addFavorite, deleteFavorite, promoteToModerator
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(newUser);

// Promote a user to moderator at /api/users/moderator/:id
router
    .route('/moderator/:id')
    .put(promoteToModerator)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// User favorite posts routes
router
    .route('/:userId/favorites/:postId')
    .post(addFavorite)
    .delete(deleteFavorite);


module.exports = router;