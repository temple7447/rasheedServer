const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MatriculationModel = new Schema({
    
    matriculation:{
       type:String,
        required:true,
        unique:true
    }
    
})

module.exports  = mongoose.model("Matriculation",MatriculationModel )