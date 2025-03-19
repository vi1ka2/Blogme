const mongoose= require('mongoose');

require("dotenv").config
const connectwithdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(console.log("Db connected sucessfully"))
    .catch((error)=> {
        console.log("Db facing an issue");
        console.log(error);
        process.exit(1);
    })
};
module.exports=connectwithdb;