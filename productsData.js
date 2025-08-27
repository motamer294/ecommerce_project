import express from 'express';
import { seedProducts } from './product.controller.js';
import { auth, adminOnly } from '../../middleware/auth.js';

const router = express.Router();


router.post('/seed', auth, adminOnly, seedProducts);

export default router;
