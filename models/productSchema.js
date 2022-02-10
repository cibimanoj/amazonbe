const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    id:String,
    img:String,
    name:String,
    variant:String,
    price:String,
    rating:String,
    discount:String,
    description:String,
});

const Products = new mongoose.model("products",productSchema)

module.exports =Products;