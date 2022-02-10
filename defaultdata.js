const Products =require("./models/productSchema");
const productsdata = require("./constant/products");

const DefaultData = async()=>{
    try{
        await Products.deleteMany({})
        const storeData= await Products.insertMany(productsdata)
        console.log(storeData);
    }
    catch(error){
        console.log("error"+error)
    }
}
module.exports =DefaultData;