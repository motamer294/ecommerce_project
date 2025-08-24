import { Router } from "express";
import { addPost, deletePost, getPosts, updatePost } from "./post.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";



export const postsRoutes = Router()

postsRoutes.get('/post', getPosts)

postsRoutes.post('/post',verifyToken, addPost)

postsRoutes.patch('/post/:id', updatePost)

postsRoutes.delete('/post/:id',verifyToken ,deletePost)