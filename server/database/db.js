// require('dotenv').config();
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const Connection = ()=>{
    
   const UserName=process.env.MONGO_URI;
//    console.log(UserName)
    
    mongoose.connect(UserName,{useNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log('database connected');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("disconnected")
    })
    mongoose.connection.on('error',()=>{console.log('error')})
}
export default Connection;