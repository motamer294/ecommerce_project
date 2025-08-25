import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isConfirmed: { type: Boolean, default: false }
  },
  { timestamps: true, versionKey: false }
);

export const User = model('User', userSchema);
