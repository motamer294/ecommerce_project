import { userModel } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendMail } from "../../utilities/Email/sendMail.js"


const getAllUsers = async(req, res)=>{

    const users =await userModel.find()
    res.json({message:"All Users", users})
}


const register = async(req, res)=>{
   

    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const addedUser = await userModel.insertOne(req.body)
        sendMail(req.body.email)
    addedUser.password = undefined
    res.json({message:"registered successfully", addedUser})
}


const login = async(req,res)=>{
    const exist = await userModel.findOne({email:req.body.email});
    if(!exist) return res.json({message:"user not found, please register"})
        const matched = bcrypt.compareSync(req.body.password, exist.password)

    if(!matched) return  res.json({message:"email or password invalid"})
      const token =  jwt.sign({_id:exist._id, role:exist.role} , 'ntig13')
        if(exist.isConfirmed === false) return res.json({message:"Please Confirm Your Email"})
        res.json({message:`welcome ${exist.name} `, token})
      
}


const verifyAccount = async(req,res)=>{
      let {email} =  req.params
     
       jwt.verify(email, "NTIG13Mail", async(err,decoded)=>{
        
        
           if(err) return res.json({message:"invalid token",err})
        await userModel.findOneAndUpdate({email:decoded.email}, {isConfirmed:true})
         res.json({message:"confirmed successfully"})
       })
       

      
       
}


const updateUser = async(req,res)=>{
    let {id}= req.params
    const updatedUser = await userModel.findByIdAndUpdate(id, {...req.body},{new:true})
    res.json({message:"updated successfully", updatedUser})
}


const deleteUser = async(req,res)=>{
     let {id}= req.params
     const deletedUser = await userModel.findByIdAndDelete(id)

      res.json({message:"deleted successfully", deletedUser})
}

export {
    getAllUsers,
    updateUser,
    deleteUser,
    register,
    login,
    verifyAccount
}