const mongoose = require('mongoose')
const MONGODB = process.env.MONGODB || "mongodb://localhost:27017/MrRached"
const ONLINEMONGODB = process.env.ONLINEMONGODB
const MONGODBE = process.env.MONGODBE 

const connectDB = async ()=>{
    try {
        
       const conn = await mongoose.connect(ONLINEMONGODB,{
            useUnifiedTopology:true,
            useNewUrlParser:true,

       })
       .then(()=>{
        console.log("mongoose is connected the database")
       })
       .catch((err)=>{
        console.log(err)
       })

    } catch (error) {
        console.log(error)
        
    }

}



module.exports = connectDB