const mongoose = require("mongoose")

const workSchema = new mongoose.Schema({
    workplace: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    did: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Work", workSchema)