import { model, Schema } from "mongoose";


const userSchema = new Schema(
    {
    name:String,
    email: String,
    password:String,
    age:Number,
    role:{
        type:String,
        default:"user",
        enum:['user', 'admin']
    },
    isConfirmed: {
        type:Boolean,
        default:false
    },
    
},
{
    timestamps:true, // createdAt, updatedAt
    versionKey:false // exclude --v
}
)


export const userModel = model('User', userSchema)
