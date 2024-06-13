const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "email":String,
        "password":String
    }
)

let signupmodel=mongoose.model("users",schema)
module.exports={signupmodel}