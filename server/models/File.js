const mongoose = require("mongoose")

const File = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String,
    },
    post_title: {
        type: String,
        required: true,
    },
    post_text: {
        type: String,
        required: true,
    }
    
})

module.exports = mongoose.model("File", File)