const router = require('express').Router();
const userRoutes = require('./user-routes');
const postsRoutes = require('./post-routes.js');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

// add prefix of `/posts` to routes created in `posts-routes.js`
router.use('/posts', postsRoutes);

module.exports = router;