const mongoose = require('mongoose')

const CompletedSchema = new mongoose.Schema({
    task:{type:String}
},{timestamps:true})

module.exports=new mongoose.model('CompletedTodo',CompletedSchema)