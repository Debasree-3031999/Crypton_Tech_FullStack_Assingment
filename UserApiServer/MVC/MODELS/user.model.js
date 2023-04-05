const mongoose=require("mongoose")
const { Schema } = mongoose;
//USER SCHEMA

//Step-1:- creating the Schema

const userSchema=new Schema({
    name:{type:String,required:true},

     gender:{type:String,required:true,unique:true},

    dob:{type:String,required:true},

    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    
},
{
    timestamps: { createdAt: 'createdOn', updatedAt: 'ModifiedOn' }
}


)

//step-2:- creating model

const User=mongoose.model("user",userSchema);

module.exports=User