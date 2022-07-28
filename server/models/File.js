const mongoose = require("mongoose")

const File = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    img: {
        data: Buffer,
        contentType: String,
    }
})

module.exports = mongoose.model("File", File)