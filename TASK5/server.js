require("dotenv").config()
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()


const port = process.env.PORT
const urlDB = process.env.URLDB
const student = require("./models/Student")
const classroom = require("./models/Classroom")

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


app.post('/api/students',async(rqs, res) => {
    try{const {name, email} = rqs.body
    const cratestudents= await student.create({name, email})
    res.status(201).json({msg:"created scssful", Date: cratestudents})
}
    catch(err){

        if(err.code === 11000){
            const doblctedfild = Object.keys(err.keyValue)[0]
            console.log(`the ${doblctedfild} is a dblcated`)
           return res.status(400).json({msg:`the ${doblctedfild} is a dblcated`, Data:err})
        }

        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout ${err}`)
    }

})


app.post('/api/classrooms',async(rqs, res) => {
    try{const {name, students} = rqs.body
    const crateclassroom= await classroom.create({name, students})
    res.status(201).json({msg:"created scssful", Date: crateclassroom})
}
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout ${err}`)
    }

})

app.get('/api/classrooms',async(rqs, res) => {
    
    try{
        const crateclassroom= await classroom.find().populate('students', 'name -_id')
        res.status(201).json({msg:"created scssful", Date: crateclassroom})
    }

    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout ${err}`)
    }

})

app.delete('/api/students/:id', async(rqs, res) => {
    try{
        const studentId = rqs.params.id
        const students = await student.findById(studentId)

        if(students ){
            const deletestudent = await student.findByIdAndDelete(studentId)
            return res.status(200).json({msg:"delete scssful", Data: deletestudent})
        }
        res.status(404).json({msg:"delete falid", Data: {student: studentId}})
    }
    catch(err){
        res.status(500).json({msg:"failed", Data:err})
        console.log(`Not filed rout ${err}`)
    }
})





app.listen(port,()=>{
    console.log("runinbg server in PORT 4000")
})