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
    path: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0,
    },
    img: {
        data: Buffer,
        contentType: String,
    }
})

module.exports = mongoose.model("File", File)
