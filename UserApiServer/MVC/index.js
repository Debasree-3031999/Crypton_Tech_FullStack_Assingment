const express=require("express");
const connect = require("./configs/db")

//--------importing module----------//
const User=require("./MODELS/user.model")

//----------importing controllers----//
const userController=require("./CONTROLLERS/user.controller")


const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/user",userController)


app.listen(5000, async()=>{
    try {
        
        await connect();
         
    } catch (error) {
    }
    console.log("listening on port http://localhost:5000")
})

