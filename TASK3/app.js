require("dotenv").config()
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()


const port = process.env.PORT
const urlDB = process.env.URLDB
const authors = require("./Models/Author")
const books = require("./Models/Book")

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



app.post('/authors', async(rqs,res) => {
    try{
        const {name} = rqs.body
        const careaAuthor = new authors({name})
        await careaAuthor.save()
        res.status(201).json({msg: "created scssful",Data: careaAuthor})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})
app.post('/books', async(rqs,res) => {
    try{
        const {title} = rqs.body
        const author =  rqs.body.authorsId
        const careaBook = new books({title,author})
        await careaBook.save()
        res.status(201).json({msg: "created scssful",Data: careaBook})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})

app.get('/books', async(rqs,res) => {
    try{
        const book =  await books.find().populate('author')
        res.status(201).json({msg: "created scssful",Data: book})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout`)
    }
})



app.listen(port,()=>{
    console.log("runinbg server in PORT 4000")
})

    
