const mongoose = require("mongoose")

const interestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("Interest", interestSchema)