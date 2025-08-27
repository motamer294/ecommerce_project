import { Router } from 'express';
import { addPost, deletePost, getPosts, updatePost } from './post.controller.js';
import { auth, adminOnly } from '../../middleware/auth.js';

export const postsRoutes = Router();

postsRoutes.get('/posts', getPosts);
postsRoutes.post('/posts', auth, addPost);
postsRoutes.patch('/posts/:id', auth, updatePost);
postsRoutes.delete('/posts/:id', auth, deletePost);
