const express=require('express');
const app=express();
const ConnectDb =require('./config/connectDb');
const UserRoutes=require('./routes/userRoutes');
const productRoutes =require('./routes/productRoutes')
const jwt=require('jsonwebtoken');
const bodyparser = require('body-parser')



app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
ConnectDb();
app.use('/users',UserRoutes)
app.use('/creat',productRoutes)






app.listen(3000,()=>{
    console.log('start in 3000')
})