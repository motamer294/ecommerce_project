import { Schema, model, Types } from 'mongoose';

const postSchema = new Schema(
  {
    title: String,
    likes: { type: Number, default: 0 },
    createdBy: { type: Types.ObjectId, ref: 'User' }
  },
  { timestamps: true, versionKey: false }
);

export const Post = model('Post', postSchema);
