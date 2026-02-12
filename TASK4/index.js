require("dotenv").config()
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()


const port = process.env.PORT
const urlDB = process.env.URLDB
const product = require("./Moduls/Product")


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


app.post('/api/products', async(rqs,res) => {
    try{
        const {name, category, price} = rqs.body
        const newproduct = new product({name, category, price})
        await newproduct.save()
        res.status(201).json({msg: "created scssful",Data: newproduct})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout ${err}`)
    }
})


app.get('/api/products', async(rqs,res) => {
    try{
        const products =  await product.find(rqs.query)
        res.status(200).json({msg: "Get products scssful",Data: products})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})



app.listen(port,()=>{
    console.log("runinbg server in PORT 4000")
})

    
