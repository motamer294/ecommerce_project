import express from 'express';
import { dbConnection } from './models/dbConnection.js';
import userRoutes from './src/modules/user/user.routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// DB Connection
dbConnection
  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully!");

    
    const userSchema = new mongoose.Schema({ name: String, email: String });
    const User = mongoose.model('User', userSchema);

    const testUser = new User({ name: "Mohamed", email: "mohamed@test.com" });
    testUser.save().then(() => console.log("Test user added to DB!"));
  })
  .catch(err => console.error("❌ MongoDB Atlas Connection Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
