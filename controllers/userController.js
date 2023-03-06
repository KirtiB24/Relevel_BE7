//bodyparser - middleware map http to req.body
const User = require("../Models/user");
const bcrypt = require("bcrypt");

//step 5 anck on postmand che
exports.createUser = async (req,res)=>{
    //validation to be added

    const user = await User.create({
        name:req.body.name,
        userId:req.body.userId,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,5)
    })
    if(!user){
        return  res.status(400).send({message:"Invalid details"})
    }
    return res.status(201).send(user);
}
exports.getAllUsers = async(req,res) =>{

    try{
        const users = await User.find({});
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(200).send({message:"Internal server error"});
    }
}

//step  6 : create api 
//-go to routes

//step 7
exports.getUserById = async(req,res) =>{
    try{
        const id = req.params.id;
        const users = await User.find({_id:id});
        if(!users || !(user.length)){
            return  res.status(400).send({message:"Invalid userid and pasword"});
        }
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(500).send({message:"Internal server error"+e});
    }
}



