import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  role: { type: String, default: 'user' },
  isConfirmed: { type: Boolean, default: false }
});

export default mongoose.model('User', userSchema);


// const userSchema = new Schema(
//   {
//     name: { type: String, trim: true, required: true },
//     email: { type: String, trim: true, required: true, unique: true },
//     password: { type: String, required: true },
//     age: { type: Number },
//     role: { type: String, enum: ['user', 'admin'], default: 'user' },
//     isConfirmed: { type: Boolean, default: false }
//   },
//   { timestamps: true, versionKey: false }
// );

// export const User = model('User', userSchema);
// export default User;  
