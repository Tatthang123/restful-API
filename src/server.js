const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose')
const port = process.env.PORT || 3000//ENV
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended:true}));
const apiRouters = require('./router/api') 
const fileUpload = require('express-fileupload')
const connection = require('./config/database')
app.use(fileUpload())
const User = require('./model/user')
const Customer = require('./model/customer')
 //để sử dụng router 
app.use('/' , apiRouters)

connection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})