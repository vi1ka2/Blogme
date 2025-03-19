const express= require('express');
const app= express();

require("dotenv").config();
const PORT= process.env.PORT || 4000 ;

//middleware
app.use(express.json());

const blog=require("./routes/blog")
//mount
app.use("/api/v1",blog);


const connectwithdb=require("./config/database");
connectwithdb();

//start the server
app.listen(PORT,()=>{
    console.log(`running succesfully on ${PORT}`);
})
app.get("/",(req,res) =>{
    res.send(`<h1> this is homee page bebu</h1>`)
 })
