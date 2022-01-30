const Product = require("../models/Product");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        console.log(req.body);
        const savedMovie = await newProduct.save();
        res.status(200).json(savedMovie);
    }catch(err){
        console.log(err)
    }
})

router.post("/get", async (req, res) => {
    
    try{
        
        const resp = await Product.find().skip(req.body.numb).limit(20)
        res.json(resp);
    }catch(e){
        console.log(e)
    }
})



module.exports = router;