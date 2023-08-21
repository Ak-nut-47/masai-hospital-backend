const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    location: String,
    date: String,
    slots: Number,
    fee: Number
})
const postModel = mongoose.model("post", postSchema)

module.exports = { postModel }