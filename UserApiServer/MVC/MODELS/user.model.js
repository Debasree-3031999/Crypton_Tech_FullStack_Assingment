const mongoose=require("mongoose")

//USER SCHEMA

//Step-1:- creating the Schema

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},

    createdOn:{type:String,required:false},

    gender:{type:String,required:true,unique:true},

    dob:{type:String,required:true},

    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    modifiedOn: Date.now()
},
{
    versionKey:false,
    timestamps:true,
}


)

//step-2:- creating model

const User=mongoose.model("user",userSchema);

module.exports=User