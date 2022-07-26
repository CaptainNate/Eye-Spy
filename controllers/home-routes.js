const router = require('express').Router();
const { File } = require('../models');

app.get("/", (req, res) => {
    res.render("index")
})

// Populate the homepage with all posts
// router.get("/", (req, res) => {
//     File.findAll({
//         attributes: ["id", "post_content", "title", "created_at"],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ["id", "comment_content", "post_id", "user_id", "created_at"],
//                 include: {
//                     model: User,
//                     attributes: ["username"],
//                 },
//             },
//             {
//                 model: User,
//                 attributes: ["username"],
//             },
//         ],
//     })
//         .then((dbFiledData) => {
//             const photos = dbFileData.map((post) => photo.get({ plain: true }));
//             res.render("index", {
//                 photos: photos,
                // loggedIn: req.session.loggedIn,
                // navTitle: "The Tech Blog"
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
