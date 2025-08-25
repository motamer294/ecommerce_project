import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is missing in .env');
  await mongoose.connect(uri, {
    dbName: process.env.DB_NAME || 'ecommerce'
  });
  console.log('✅ MongoDB Connected');
};
