const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const {signupmodel}=require("./models/signup")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://bhagya:bhagya20@cluster0.gszky.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedpassword=async(password)=>{
  const salt=await bcrypt.genSalt(10)
  return bcrypt.hash(password,salt)
}

app.post("/",async(req,res)=>{
    let input=req.body
    let hashedPassword=await generateHashedpassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let signup=new signupmodel(input)
    signup.save()
       res.json({"status":"success"})
})

app.listen(8081,()=>{
   console.log("server started")
})