//import model
const Post=require("../models/postmodel");
const Like=require("../models/likemodel");

//route handler
exports.likePost= async (req,res)=>{
    try{
        const{post,user}=req.body;
        const like=new Like({
            post,user,
        });
        const savedLike= await like.save();
        //update post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$push : {likes:savedLike._id} },{new:true});
        
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        console.log(error); // Log the error to inspect what's wrong
        return res.status(500).json({
            error: "Error while creating like",
        });
    }
    
}
    //unlike a post
    exports.unlikePost=async(req,res)=>{
        try{
         
            const{post,like}=req.body;
            //find and delete like and post collection
            constdeletedLike = await Like.findOneAndDelete({post:post,_id:like});
            //update post collection
            const updatedPost= await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}} ,{new:true});
            res.json({
                post:updatedPost,
            })
        }
        catch(error){
            console.log(error); // Log the error to inspect what's wrong
        return res.status(500).json({
            error: "Error while creating like",
        });
        }
    };

    