//import mongooose
const mongoose = require('mongoose');


//rout handler
const likeSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post",//refrence to the post model 
        required:false 
    },
    user:{
        type:String,
        required:true,
    },
})

//export
module.exports=mongoose.model("Like",likeSchema);