//Nơi để khai báo router
const express = require('express')
//vì ko có app lên phải dùng router 
const router = express.Router()
const {getHome , getAway} = require('../controller/homeController')
router.get('/', getHome )
router.get('/user' , getAway)



module.exports = router