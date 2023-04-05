const express = require("express")



//--schema importing---//
const User = require("../MODELS/user.model")




const userrouter = express.Router();


userrouter.get("/", async (req, res) => {
    console.log("get",req)
    try {
        const user = await User.find().lean().exec()
        return res.status(200).send({ userget: user }) 

    } catch (error) {

        return res.status(500).send({ message: "something went wrong" })

    }
})


//POST DATA

userrouter.post("/", async (req, res) => {
    console.log(req,"lsndfk")
    try {
        const user = await User.create(req.body);

        return res.status(201).send({ user: user })
    } catch (error) {

        return res.status(500).send({ message: "something went wrong" })

    }
})


//UPDATED DATA
userrouter.patch("/:id", async (req, res) => {


    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()

        res.status(201).send({ updated: user })

    } catch (error) {
        req.status(500).send({ message: error.message })

    }
})

//DELETE DATA

userrouter.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(200).send({ deletebyid: user })
    } catch (error) {
        return res.status(500).send({ message: error.message })

    }
})




module.exports = userrouter




