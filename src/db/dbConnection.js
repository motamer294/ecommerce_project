import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || 'ecommerce'
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ DB Connection Failed', err);
    process.exit(1);
  }
};
