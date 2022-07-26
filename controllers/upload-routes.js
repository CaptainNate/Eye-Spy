const router = require('express').Router();
const { File } = require('../models');

app.post("/upload", upload.single("file"), async (req, res) => {
    console.log("REQ", req.params)
    console.log("RES", res)

    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname,
    }
    const file = await File.create(fileData)
    res.render("index")
    // res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` })
})

module.exports = router;
