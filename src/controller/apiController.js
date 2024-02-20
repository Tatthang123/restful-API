const User = require('../model/user')

const getUserapi = async (req , res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode : 0,
        data : results
    })
}
//postapi
    const postUserapi = async(req , res)=>{
     
        let name = req.body.name;
        let email= req.body.email;
        let city = req.body.city;
        let user  = await User.create({
            name : name,
            email : email,
            city : city
        })

        return res.status(200).json({
            EC : 0,
            data : user
        })
    }
//update người dùng
    const putUserapi = async (req, res) =>{
        let name  = req.body.name;
        let email = req.body.email;
        let city = req.body.city
        let userID = req.body.userID

    let user  =  await User.updateOne({_id : userID} , {name : name , email : email , city : city})
            res.status(200).json({
                EC : 0,
                data : user
            })
    }
//xóa user
    const deleteUserapi = async (req, res) => {
            let id = req.body.userID
        if(id) {
            let user = await User.deleteOne({_id : id})
            res.status(200).json({
                EC : 0 ,
                data : user
            })
        }
    }
module.exports = {getUserapi , postUserapi , putUserapi , deleteUserapi}