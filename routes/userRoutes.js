const express=require('express');
const{creationUser,login,updatUser,deletUser}=require('../controllers/userControlers');
const routes =express.Router();


routes.post('/signup',creationUser)
routes.post('/login', login)
routes.put('/update',updatUser)
routes.delete('/delete',deletUser)







module.exports=routes;