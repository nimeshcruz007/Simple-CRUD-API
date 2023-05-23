const express = require("express");
const product = require('../models/productModels.js');
const router = express.Router();

router.get('/view',async (req,res)=>{
  try{
    const productsFetch = await product.find({});
    res.status(200).json(productsFetch);
  }catch(err){
    res.status(500).json(err);
  }
})

router.get('/view/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    const productsFetch = await product.findById(id);
    res.status(200).json(productsFetch);
  }catch(err){
    res.status(500).json(err);
  }
})

router.post('/insert',async (req,res)=>{
  try{
      const productInserted = await product.create(req.body);
      res.status(200).json(productInserted);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
})

router.put('/update/:id',async (req,res)=>{
  try{
    const {id} = req.params;
      const productUpdate = await product.findByIdAndUpdate(id,req.body);
    if(!productUpdate){
      res.status(404).json( {message :`Cannot find a product with id ${id} in database`});
    }
    else{
      res.status(200).json(productUpdate);
    }
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
})

router.delete('/delete/:id',async (req,res)=>{
  const {id} =  req.params;
  const productDelete = await product.findByIdAndDelete(id);
  if(!productDelete){
    res.status(404).json({message:`Cannot find a product with id ${id}`});
  }
    else{
      res.status(200).json({message:`item deleted`});
  }
})

module.exports = router;
