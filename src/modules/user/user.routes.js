import { Router } from "express";
import { verifyAccount, deleteUser, getAllUsers, updateUser, register, login } from "./user.controller.js";
import express from 'express'
import { checkEmail } from "../../middleware/checkEmail.js";
import { verifyToken } from "../../middleware/verifyToken.js";


export const userRoutes = Router()

userRoutes.use(express.json())


userRoutes.get('/users', getAllUsers)

userRoutes.put('/user/:id', updateUser)

userRoutes.post('/user', checkEmail ,register)

userRoutes.post('/user/login', login)

userRoutes.delete('/user/:id', deleteUser)


userRoutes.get('/user/verify/:email' ,verifyAccount)