const mongoose = require("mongoose");
const express = require("express");
const product = require("./models/productModels.js");
const routes = require("./routes/route.js");
const app = express();

app.use(express.json());



app.get('/',(req,res)=>{
  res.send("welcome to our home page");
})

app.get('/about',(req,res)=>{
  res.send("welcome to our about page");
})

app.use('/product',routes);

mongoose.connect('mongodb+srv://nimeshnair1999:admin%40123@new-api.ml9fg2c.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
  console.log("connected to Mongo DB");
}).catch((err)=>{
  console.log(err);
})
app.listen(3000, ()=>{
  console.log("http://localhost:3000");
})
