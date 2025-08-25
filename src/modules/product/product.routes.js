import { Router } from 'express';
import { verifyToken, isAdmin } from '../../middleware/auth.js';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from './product.controller.js';

export const productRoutes = Router();

productRoutes.get('/', getAllProducts); // GET /api/products
productRoutes.post('/', verifyToken, isAdmin, addProduct); // POST /api/products
productRoutes.patch('/:id', verifyToken, isAdmin, updateProduct); // PATCH /api/products/:id
productRoutes.delete('/:id', verifyToken, isAdmin, deleteProduct); // DELETE /api/products/:id
