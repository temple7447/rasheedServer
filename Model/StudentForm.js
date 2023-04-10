const mongoose = require('mongoose')
const Schemas = mongoose.Schema;


const FORM = new Schemas({
    fullname:{
        type:String,
         required:true
     },
     matriculation:{
        type:String,
         required:true,
         unique:true
     },
     program:{
        type:String,
         required:true
     },
     level:{
        type:String,
         required:true
     },
     createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('StudentForm', FORM)
