const mongoose = require('mongoose')
const Schemas = mongoose.Schema;


const AssignmentNotification = new Schemas({
    messageA:{
        type:String,
     
     },
     DepartmentA:{
        type:String,
    
     },
     levelA:{
        type:String,

     },
     programmA:{
        type:String,
       
     },
     timeA: { type: Date },
})

module.exports = mongoose.model('AssignmentNotification', AssignmentNotification)
