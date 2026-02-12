require("dotenv").config()
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()


const port = process.env.PORT
const urlDB = process.env.URLDB
const contact = require("./Model/Contact")

app.use(express.json())


async function counctinDB(){
try{
    await mongoose.connect(urlDB)
    console.log("Scssful conaction DB")
 }
catch(err){
    console.log(`concation failed ${err}`)
    }
}

// vocing:
counctinDB()

// Roting":
// إنشاء الروابط (Routes):


// POST /api/contacts: لإضافة جهة اتصال جديدة.


// GET /api/contacts: لجلب كل جهات الاتصال المخزنة.


app.post('/contacts', async(rqs,res) => {
    try{
        const conPhones = new contact(rqs.body)
        await conPhones.save()
        res.status(201).json({msg: "created scssful",Data: conPhones})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})

app.get('/contacts', async(rqs,res) => {
    try{
        const conPhones =  await contact.find()
        res.status(201).json({msg: "created scssful",Data: conPhones})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})



app.listen(port,()=>{
    console.log("runinbg server in PORT 4000")
})