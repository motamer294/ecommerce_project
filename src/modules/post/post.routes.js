import { Router } from 'express';
import { addPost, deletePost, getPosts, updatePost } from './post.controller.js';
import { verifyToken } from '../../middleware/auth.js';

export const postsRoutes = Router();

postsRoutes.get('/posts', getPosts);
postsRoutes.post('/posts', verifyToken, addPost);
postsRoutes.patch('/posts/:id', verifyToken, updatePost);
postsRoutes.delete('/posts/:id', verifyToken, deletePost);
