const mongoose = require("mongoose");
const express = require("express");
const product = require("./models/productModels.js");
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("welcome to our home page");
})

app.get('/about',(req,res)=>{
  res.send("welcome to our about page");
})

app.get('/view',async (req,res)=>{
  try{
    const productsFetch = await product.find({});
    res.status(200).json(productsFetch);
  }catch(err){
    res.status(500).json(err);
  }
})

app.get('/view/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    const productsFetch = await product.findById(id);
    res.status(200).json(productsFetch);
  }catch(err){
    res.status(500).json(err);
  }
})

app.post('/product',async (req,res)=>{
  try{
      const productInserted = await product.create(req.body);
      res.status(200).json(productInserted);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
})

app.put('/update/:id',async (req,res)=>{
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

app.delete('/delete/:id',async (req,res)=>{
  const {id} =  req.params;
  const productDelete = await product.findByIdAndDelete(id);
  if(!productDelete){
    res.status(404).json({message:`Cannot find a product with id ${id}`});
  }
    else{
      res.status(200).json({message:`item deleted`});
  }
})

mongoose.connect('mongodb+srv://nimeshnair1999:admin%40123@new-api.ml9fg2c.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
  console.log("connected to Mongo DB");
}).catch((err)=>{
  console.log(err);
})
app.listen(3000, ()=>{
  console.log("http://localhost:3000");
})
