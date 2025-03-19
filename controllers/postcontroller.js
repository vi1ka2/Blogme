const Post= require("../models/postmodel");
exports.createPost=async(req,res)=>{
    try{
        const{title,body}= req.body;
        const post= new Post({
            title,body,
        })
        const savedPost = await post.save();
        res.json({
            post:savedPost,
        })
    }
    catch(eroor){
        return res.status(400).json({
            error:"eroor while creating post",
        })

    }
};
exports.getAllposts=async(req,res)=>{
    try{
        const posts= await Post.find();
        res.json({
           posts, 
        });
    }
    catch(error){
        return res.status(400).json({
            error:"error while fetch post",
        })
    }
};
