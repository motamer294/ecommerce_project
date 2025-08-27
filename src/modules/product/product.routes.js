import express from 'express';
import { seedProducts, addProduct, updateProduct, deleteProduct, getAllProducts } from './product.controller.js';
import { auth, adminOnly } from '../../middleware/auth.js'; 

const router = express.Router();

router.post('/seed', auth, adminOnly, seedProducts); 
router.post('/', auth, adminOnly, addProduct);
router.patch('/:id', auth, adminOnly, updateProduct);
router.delete('/:id', auth, adminOnly, deleteProduct);
router.get('/', getAllProducts);

export default router;
