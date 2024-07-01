const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    task:{type:String}
},{timestamps:true})

module.exports=new mongoose.model('TODO',UserSchema)
