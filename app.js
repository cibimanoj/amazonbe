require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require("mongoose");
require("./db/conn");

const Products=require("./models/productSchema")
const DefaultData=require("./defaultdata")
const router=require("./routes/router")
const cors =require("cors")

app.use(express.json());
app.use(cors())
app.use(router)

const PORT=process.env.PORT||3000;
app.get("/",(req,res)=>{
    res.send("🙋 guys this is cibi manoj")
})
app.listen(PORT,()=>{
    console.log(`server is running on port number${PORT}`)
})

DefaultData();