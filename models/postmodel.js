//import mongooose
const mongoose = require('mongoose');


//rout handler
const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
 }]

})


//export
module.exports=mongoose.model("Post",postSchema);