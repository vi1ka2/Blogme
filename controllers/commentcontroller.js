//import model
const Post=require("../models/postmodel");
const Comment=require("../models/commentmodel");

//business logic
exports.createComment = async (req, res) => {
    try {
        console.log(req.body); // Log the request body to check the data
        const { post, user, body } = req.body;
        
        if (!post || !user || !body) {
            return res.status(400).json({
                error: "Missing required fields (post, user, body)"
            });
        }
        
        // Create a comment object
        const comment = new Comment({
            post, user, body
        });
        
        // Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post by id and add the new comment to the comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { comments: savedComment._id }
        }, { new: true })
        .populate("comments") // Populate the comments array with comment documents
        .exec();

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        console.log(error); // Log the error to inspect what's wrong
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
};

