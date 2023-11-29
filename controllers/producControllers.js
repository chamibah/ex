const{ validationResult }=require('express-validator');
const Produit=require('../models/product');
const mongoose =require('mongoose');




//creat name descriptopn color price size quantite image
const creatProduit =(req,res)=>{
    console.log(req.body)
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.json({erreur:result.array()});

    }
    let newProduit= new Produit({
        name:req.body.name,
        description:req.body.description,
        colors:req.body.colors,
        price:req.body.price,
        size:req.body.size,
        quantite:req.body.quantite,
        image:req.file.originalname

    })
    newProduit.save();
    res.json(newProduit);
}
//get
const getProduit=async(req,res)=>{
    let Produits = await Produit.find();
    res.json(Produits)
}
//update
const appdateProduit =async(req,res)=>{
    let id =req.body.id
    console.log(req.body)
    let findproduit=await Produit.findOne({
        _id: id

    });
   
    findproduit.description=req.body.description,
    findproduit.colors=req.body.colors,
    findproduit. price=req.body.price,
    findproduit.size=req.body.size,
    findproduit.quantite=req.body.quantite,
    findproduit.image=req.file.originalname,
    findproduit.save();
    res.json(findproduit);

}
//delete
const deletProduit =(req,res)=>{
    Product.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "vous avez bien suprimée votre produit"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}












module.exports={creatProduit,getProduit,appdateProduit,deletProduit}