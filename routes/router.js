const express =require("express");
const router =new express.Router();
const products=require("../models/productSchema");
const USER=require("../models/userSchema");

router.get("/products",async(req,res)=>{
    try{
        const productsdata= await products.find()
        //console.log("console data"+productsdata)
        res.status(201).json(productsdata)

    }catch(error){
        console.log("error",+error.message)
    }
})
router.get("/products/:id",async(req,res)=>{
    try{
        const {id} = req.params
        //console.log(id)
        const individualdata= await products.findOne({id:id})
        res.status(201).json(individualdata)

    }catch(error){
        res.status(201).json(individualdata)
        console.log("error",+error.message)
    }
})
//register data 
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, number, password, apassword } = req.body;

    if (!name || !email || !number || !password || !apassword) {
        res.status(422).json({ error: "All fields required" });
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "user already exists" });
        } else if (password !== apassword) {
            res.status(422).json({ error: "passwords are not matching" });;
        } else {

            const newUser = new USER({
                name, email,number, password, apassword
            });
            const storedata = await newUser.save();
             console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error" + error.message);
        res.status(422).send(error);
    }

});


module.exports =router;