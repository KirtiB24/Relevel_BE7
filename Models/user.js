const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    //to create automatic entry of updation
    createdAt:{
        type:Date,
        imutable:true,
        default : ()=>Date.now()
    },
    //types: customer,admin,engineer
    userTypes:{
        type: String,
        required : true,
        default :"CUSTOMER"
    },
    //like evry one can not be admin .
    userStatus :{
        type: String,
        required : true,
        default : "APPROVED"
    }
})

module.exports = mongoose.model("User",userSchema);