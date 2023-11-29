const express=require('express');
const{creatProduit,getProduit,appdateProduit,deletProduit}=require('../controllers/producControllers');

const { uploadSingle } =require('../helpers/multreMidelwar');

const { body}=require('express-validator');
const routes= express.Router();


//creat name descriptopn color price size quantite image
routes.post('/creat',uploadSingle,
body('name').notEmpty(),
body('description').notEmpty(),
body('colors').notEmpty(),
body('price').notEmpty(),
body('size').notEmpty(),
body('quantite').notEmpty(),
creatProduit);
routes.get('/',getProduit)
routes.post('/',appdateProduit)
routes.delete('/:id',deletProduit)


module.exports=routes;





