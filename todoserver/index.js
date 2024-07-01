const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
dotenv.config()

const useR = require('./Router/UseRouter')
const Comp = require('./Router/CompletedRouter')

mongoose.connect(process.env.project_key).then(()=>{
    console.log('DataBase is Connectd');
})

app.use(express.json())
app.use('/data',useR)
app.use('/data',Comp)

app.listen(7006,()=>{
    console.log('Server is Connected');
})