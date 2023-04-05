const express=require("express");
const connect = require("./configs/db")
require('dotenv').config();
const port=process.env.PORT||5000;

//--------importing module----------//
const User=require("./MODELS/user.model")

//--------importing controllers----//
const userController=require("./CONTROLLERS/user.controller")


const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/users",userController)


app.listen(port, async()=>{
    try {
        
        await connect();
        console.log("Connected to DB")
         
    } catch (error) {
        console.error(error.message);
    }
    console.log(`listening on port http://localhost:${port}`)
})

