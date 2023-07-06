const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre:{
        type: String,
        enum:["Fiction", "Science", "Comic"]
    },
    description: String,
    price: Number,
})

const BookModel = mongoose.model("Book", bookSchema)

module.exports = BookModel