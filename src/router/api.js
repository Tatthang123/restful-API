const express = require('express')
const routeApi = express.Router()
const {getUserapi , postUserapi , putUserapi , deleteUserapi} = require('../controller/apiController')
routeApi.get('/user' ,getUserapi )

routeApi.post('/user' , postUserapi)

routeApi.put('/user' , putUserapi)

routeApi.delete('/user' , deleteUserapi)
module.exports = routeApi