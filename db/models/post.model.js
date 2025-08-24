import mongoose, { model, Schema } from "mongoose";


const postSchema = new Schema({
    title:String,
    likes:Number,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true,
    versionKey:false
})

export const postModel = model('Post', postSchema)