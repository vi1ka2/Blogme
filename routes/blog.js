const express=require('express');
const router= express.Router();
//import controller
const{createComment}=require("../controllers/commentcontroller");
const{createPost}=require("../controllers/postcontroller");
const{likePost}=require("../controllers/likecontroller");
const{getAllposts}=require("../controllers/postcontroller");
const{unlikePost}=require("../controllers/likecontroller");



//mapping create

router.post("/comments/create",(req, res, next) => {
    console.log('comment section chalu');
    next(); // Call next() to continue to the getTodo function
},createComment);
router.post("/posts/create",createPost);
router.post("/posts/likes/like",likePost);
router.get("/posts",getAllposts);
router.post("/posts/likes/unlike",(req, res, next) => {
    res.send('Unlike route');
    next(); // Call next() to continue to the getTodo function
},unlikePost);



//export
module.exports=router;