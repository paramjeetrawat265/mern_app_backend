const express=require("express");
const signRouter=express.Router();

signRouter.get("/",(req,res)=>{
    console.log("login");
})

module.exports={
    signRouter
}