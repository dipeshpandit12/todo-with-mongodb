const mongoose=require("mongoose");

const User=new mongoose.Schema({
    user_email:{type:String,require:true},
    user_password:{type:String,require:true,unique:true},
    quote:{type:String}
},{
    collection:'user-data'
})


const model=mongoose.model("UserData",User)

module.exports=model;