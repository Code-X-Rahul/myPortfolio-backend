const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Must Provide Name"]
    },
    startedAt:{
        type:String,
        default:Date.now()
    },
    finishedAt:{
        type:String,
        default:Date.now()
    },
    url:{
        type:String,
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    completed:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('Project', ProjectSchema)