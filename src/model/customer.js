const mongoose = require('mongoose')
const customerSchema = mongoose.Schema({
        name : {
           type : String,
            require : true
        } ,
        anddress : String,
        phone : String ,
        email : String ,
        Image : String ,
        description : String
},
        {timestamps : true}
)
const Customer =  mongoose.model('customer' , customerSchema)
module.exports = Customer