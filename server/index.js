const express = require('express')
const app = express()
const mongoose = require("mongoose")
const product = require("./routes/Products")


mongoose.connect("mongodb+srv://farhod:never_forget_this@cluster0.aegrh.mongodb.net/OnlineStore?retryWrites=true&w=majority", () => {
    console.log("database is ready!")
})

app.use(express.json())
app.use('/routes/', product)

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('hello farhod')
})


app.listen(5000, () => {
    console.log("server started on port 5000...")
})