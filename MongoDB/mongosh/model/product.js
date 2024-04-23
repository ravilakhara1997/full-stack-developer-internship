const mongoose= require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, require:true},
    price:{type:Number, require:true},
    description:{type:String},
    category:{type:String, require:true}
    

},{timestamps:true})

const ProductModel = mongoose.model('Product',productSchema)

module.exports=ProductModel