const  user =require('../models/user');
const mongoose =require('mongoose');
const bcrypt=require('bcrypt');


const jwt =require('jsonwebtoken');
const Users = require('../models/user');
//creatsign
 const creationUser =async(req,res)=>{
    console.log(req.body)
    const hashapssword =bcrypt.hashSync(req.body.password,10);
    
    let newUser= new Users({
        name:req.body.name,
        email:req.body.email,
        password:hashapssword
    })
    newUser.save().then(result=>{
        res.json('vous avez bien crée votre compte' )
    }).catch(error=>{
        res.json(error)
    })
 }


//post log
const login =async(req,res)=>{
   await Users.findOne({
        email:req.body.email
    }).then(user=>{
     console.log(user);
     const comparPassword =bcrypt.compareSync(req.body.password,user.password)
     if(!comparPassword){
        res.status(404).json({message:"password erroné !"})
     }
     const token =jwt.sign({user:user},'secré-key');
     res.status(200).json({message:"connecté successfuly ",token:token})
    })
}

    

//update
const updatUser =async(req,res)=>{
 let id =req.body.id        
       let findUser=await Users.findOne({
        _id:id
       });
       findUser.email=req.body.email
       findUser.password=req.body.password
       findUser.name=req.body.name
       findUser.save();
       res.json(findUser);
}

//delete
const deletUser=(req,res)=>{
    Users.deleteOne({_id:new mongoose.Types.ObjectId(req.params.id)})
    .then(result=>{
        res.status(200).json({
            message:"vous avec bien suprimé votre compte"
        });
    }).catch(err=>{
        console.log(err);
        res.statuts(500).json({
            error:err
        });
    });
}
module.exports={creationUser,login,updatUser,deletUser};