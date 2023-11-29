const mongoose =require('mongoose')



const produitShema =new mongoose.Schema({
    name:{
        type: String,
        required : true,  
    },
    description:{
        type: String,
        required : true, 
    },
    quantite:{
        type:Number,
        required : true, 

    },
    colors:{
        type: String,
        required : true, 
    },
    size:{
        type: String,
        required : true, 
    },
    image:{
        type: String,
        required : true, 
    }


})




const  Produit =mongoose.model('Produit',produitShema )
module.exports=Produit;