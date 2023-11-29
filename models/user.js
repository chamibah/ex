const mongoose=require('mongoose');
const user=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email :{
        type:String,
        requires:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
})
const Users=mongoose.model('users',user);
module.exports=Users