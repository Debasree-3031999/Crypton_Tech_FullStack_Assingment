const mongoose=require("mongoose")


const connect =()=>{
    return mongoose.connect(
        `mongodb+srv://admin1234:${process.env.ADMIN_PWD}@cluster0.1iwdzcf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )
}

module.exports=connect;