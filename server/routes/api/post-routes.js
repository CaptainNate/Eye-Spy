const router = require('express').Router();
const { getAllPosts, newPost, getPostsById, updatePost, deletePost, newComment, deleteComment
} = require('../../controllers/post-controller');

// Set up GET all and POST at /api/posts
router
    .route('/')
    .get(getAllPosts)
    .post(newPost);

// Set up GET one, PUT, and DELETE at /api/posts/:id
router
    .route('/:id')
    .get(getPostsById)
    .put(updatePost)
    .delete(deletePost);

// Route to add a new comment at /api/posts/:postId/comments
router
    .route('/:postId/comments')
    .post(newComment);

// Route to delete a comment given the ID at /api/posts/:postId/comments/:commentId
router
    .route("/:postId/comments/:commentId")
    .delete(deleteComment);

// TO-DO: Route to manage Post likes 

// TO-DO: Route to manage Post hates 

module.exports = router;