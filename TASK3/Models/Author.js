const mongoose = require('mongoose')


const authorschema = new mongoose.Schema({
    name: String
})


const author = mongoose.model("Author", authorschema)
module.exports = author
