const mongoose = require('mongoose')



const Productscehma = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },

})


const Product = mongoose.model("Product", Productscehma)

  module.exports = Product