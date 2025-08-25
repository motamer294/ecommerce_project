import { Router } from 'express';
import { checkEmail } from '../../middleware/checkEmail.js';
import { verifyToken } from '../../middleware/auth.js';
import { deleteUser, getAllUsers, login, register, updateUser, verifyAccount } from './user.controller.js';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers); // GET /api/users
userRoutes.post('/register', checkEmail, register); // POST /api/users/register
userRoutes.post('/login', login); // POST /api/users/login
userRoutes.put('/:id', verifyToken, updateUser); // PUT /api/users/:id
userRoutes.delete('/:id', verifyToken, deleteUser); // DELETE /api/users/:id
userRoutes.get('/verify/:email', verifyAccount); // GET /api/users/verify/:email
