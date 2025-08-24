import { postModel } from "../../../db/models/post.model.js"
import jwt from 'jsonwebtoken'


const getPosts = async(req,res)=>{
    const posts = await postModel.find().populate("createdBy")

    res.json({message:"All Posts", posts})
}

const addPost = async(req,res)=>{
      
      req.body.createdBy = req.decoded._id
    const added =await postModel.insertOne(req.body)
    res.json({message:"added successfully"},added)

}

const updatePost = async(req, res)=>{
        let {id} = req.params
        const updated =await postModel.findByIdAndUpdate(id, {...req.body},{new:true})
        res.json({message:"updated successfully",updated})
}

const deletePost = async(req, res)=>{
        let {id} = req.params
        
        const deletedPost = await postModel.findOneAndDelete({_id:id, createdBy:req.decoded._id})
        
        if(deletedPost) return res.json({message:"deleted successfully",deletedPost})
        res.json({message:"post not found"})

    }


    export{
        getPosts,
        addPost,
        updatePost,
        deletePost
    }