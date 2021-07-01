import Post from "../models/posts.js"

const getPosts = async(req, res )=> {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    }
    catch(err){
        res.status(404).json({message: err.message})
    }

}



export default getPosts
