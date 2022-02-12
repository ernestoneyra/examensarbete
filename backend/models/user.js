const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    traits: {
        one: {
            type: String,
            required: true
        },
        two: {
            type: String,
            required: true
        },
        three: {
            type: String,
            required: true
        },
        four: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("User", userSchema)