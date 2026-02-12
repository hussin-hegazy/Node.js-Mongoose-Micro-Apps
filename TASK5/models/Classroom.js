const mongoose = require("mongoose")

const Classroom = new mongoose.Schema({
    name:{
        type:  String,
        required: true
    },
    students:{
        type:[{type:mongoose.Schema.Types.ObjectId,
                ref:'Student'
        }],
    }
})



const classroom = mongoose.model("Classroom", Classroom) 
module.exports = classroom