const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter a product name"]
  },
  quantity:{
    type: Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type: String,
    required:false
  }
},{
  timestamp:true
});

const productModel = mongoose.model('Products',productSchema);

console.log(productModel.Products);
module.exports = productModel;
