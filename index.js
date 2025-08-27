import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/db/dbConnection.js';
import { userRoutes } from './src/modules/user/user.routes.js';
import productRoutes from './src/modules/product/product.routes.js';
import { orderRoutes } from './src/modules/order/order.routes.js';
import { postsRoutes } from './src/modules/post/post.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

await connectDB();

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', postsRoutes);

app.get('/', (req, res) => res.json({ ok: true, service: 'E-commerce API' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

