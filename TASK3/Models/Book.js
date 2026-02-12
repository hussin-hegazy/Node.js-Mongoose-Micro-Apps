const mongoose = require('mongoose')


const authorschema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }

    
})


const book = mongoose.model("Book", authorschema)
module.exports = book
