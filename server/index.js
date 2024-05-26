
const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const User=require("./models/user.model")
const jwt=require("jsonwebtoken")

// used cors as we using cross ports like 3000 in client and 1001 in server
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/todo")

let port=1001;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.post("/api/register", async (req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            user_email:req.body.user_email,
            user_password:req.body.user_password
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:'Duplicate email'})
    }
})

app.post("/api/login", async (req,res)=>{

    try{

        const user=await User.findOne({
            user_email:req.body.user_email,
            user_password:req.body.user_password
        })
        if(user){
            const token=jwt.sign({
                user_email:user.user_email,
                user_password:user.user_password
            },'secret123')
            return res.json({status:"ok",user:token})
        }else{
            res.json({status:"error",user:false})
        }

    }catch{
        res.json({status:'error'})
    }
})
