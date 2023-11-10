const mongoose = require("mongoose")

const Schema = mongoose.Schema

const recommendSchema = new Schema({
    recommendation: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model("recommend", recommendSchema)