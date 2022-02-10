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

const PORT=8005;
app.listen(PORT,()=>{
    console.log(`server is running on port number${PORT}`)
})

DefaultData();