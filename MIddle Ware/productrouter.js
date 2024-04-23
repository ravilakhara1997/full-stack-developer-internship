const express=require('express');

const router= express.Router();// Created Router Object

router.get('/',(req,res)=>{
    res.send('All product')
})

router.post('/',(req,res)=>{
    res.send('Create new product')
})

router.get('/:id',(req,res)=>{
    res.send('Get  product by id')
})

module.exports=router;
