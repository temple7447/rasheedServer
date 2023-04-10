const express = require('express');
const router = express.Router();
const AssignmentNotification = require('../Model/AssignmentNotification');

router.get('/Notification', (req, res) => {
  AssignmentNotification.find({})
  .then((persons)=>{
res.send(persons)

  })
  .catch((error)=>{
    console.log(error)
})


});


router.post('/Notification', (req,res)=>{
    const {messageA,DepartmentA,levelA,programmA,timeA} = req.body;
    const Notification  = new AssignmentNotification({
        messageA,DepartmentA,levelA,programmA,timeA
    })
    Notification.save({})
    .then(()=>{
        console.log("it was a success")
    } )
.catch((error)=>{
    console.log(error)
})
})

router.post('/delete',(req,res)=>{
    console.log(req.body)
    const { _id } = req.body;
    AssignmentNotification.deleteOne({_id})
    .then(()=>{
        console.log('it was successfully Deleted')
    })
    .catch((err)=>{
        console.log(err)
    })
})



module.exports = router;