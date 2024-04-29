const express= require('express');
const { userProfile} = require('../controllers/user.controller');
const authenticate = require('../middlewares/authenticate');

const router= express.Router();

router.get('/profile',authenticate,userProfile);


module.exports=router;