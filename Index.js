const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path');
const AdminDashBoard = require('./Router/AdminGate')
const Dashboard = require('./Router/Dashboard')
const StudentSubmittion = require('./Router/StudentSubmiition')
const multer = require("multer");
dotenv.config({ path: './.env' });
const connectDB = require('./db')
const Nofication = require('./Router/Notification')
connectDB()
app.use(express.json());
app.use(cors())


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res, next) => {
  res.json('Hello World!');
});



app.use('/', AdminDashBoard )
app.use('/', Dashboard )
app.use('/', StudentSubmittion )
app.use('/Admin/Dashboard', Nofication )




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
