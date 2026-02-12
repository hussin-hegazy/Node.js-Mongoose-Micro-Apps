const mongoose = require('mongoose')

const Studentschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


const student = mongoose.model("Student",Studentschema)

module.exports =student