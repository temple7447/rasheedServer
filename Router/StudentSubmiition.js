const express = require('express')
const router = express.Router()
const StudentForm = require('../Model/StudentForm')
const Matriculation = require('../Model/Matriculation')
const path = require("path");







router.get('/Submittion',(req,res)=>{
    res.send("you are in the submittion page and what cani do for you!")
})


router.post('/Submittion',(req,res)=>{
    console.log(req.body)
    
    
const {fullname,matriculation, program,level } = req.body;
   

if(!fullname || !matriculation || ! program || !level){
    res.send('please enter you all field')
}else{

    Matriculation.find({matriculation})
    .then((user)=>{
if(!user){
    res.send("please contact the admin to add your name")
}else{
const SubmitForm = new StudentForm({
    fullname, matriculation,  program, level,

})

SubmitForm.save((err, file) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving file to database");
    } else {
      res.json({ message: "File uploaded successfully", file });
    }
  })
.then(()=>{
console.log('it was a success')
})
.catch((err)=>{
    console.log("it was not a success",err)
})
}
    })
    .catch((err)=>{
        console.log(err)
    })
}
    

})



module.exports = router;

