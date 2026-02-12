const mongoose=  require("mongoose")


const ContactSchema = new mongoose.Schema({
fullName:{
    type:String,
    required:true
},
phones:{
    type:[String]
},

socialMedia:{
    facebook:String,
    linkedin:String
}

})


const contact = mongoose.model("contact",ContactSchema)
module.exports = contact