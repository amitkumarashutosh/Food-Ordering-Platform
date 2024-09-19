import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    auth0Id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:String,
    addressLine:String,
    city:String,
    country:String
},{timestamps:true})

export const User=mongoose.model("User",userSchema)