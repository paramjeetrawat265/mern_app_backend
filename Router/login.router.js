const express=require("express");
const loginRouter=express.Router();

loginRouter.get("/",(req,res)=>{
    console.log("login");
})

module.exports={
    loginRouter
}