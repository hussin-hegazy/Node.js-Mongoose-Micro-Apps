require("dotenv").config()
const express = require("express")
const mongoose  = require("mongoose")
const app = express()


const port = process.env.PORT
const urlDB = process.env.URLDB
const task = require("./Moduls/Task")

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

app.post('/task', async(rqs, res) => {
try{

    const {title}= rqs.body
    const creae_task = await task.create({title})
    res.status(201).json({msg:"creat Task Den", creae_task})
}
catch(err){
    console.log("filed creat task "+ err) 
}

})

app.get('/task', async(rqs, res) => {
try{

    
    const all_task = await task.find()
    res.status(200).json({msg:"creat Task Den", all_task})
}
catch(err){
    console.log("nll tasks "+ err) 
}

})





app.listen(port,()=>{
    console.log("runinbg server in PORT 4000")
})