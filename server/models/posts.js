import mongosee from "mongoose";

const postSchema = mongosee.Schema({
    title : String,
    subtitle :String,
    content :String,
    tag : String,
    image :String,
    createdAt: {
        type:Date,
        default: new Date()
    }

})

const Post = mongosee.model("Post",postSchema)
export default Post
