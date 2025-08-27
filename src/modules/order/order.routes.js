import { Router } from 'express';
import { auth, adminOnly as isAdmin } from '../../middleware/auth.js'; 
import { createOrder, getAllOrders, getMyOrders, updateOrderStatus } from './order.controller.js';

export const orderRoutes = Router();

orderRoutes.post('/', auth, createOrder); // POST /api/orders
orderRoutes.get('/my', auth, getMyOrders); // GET /api/orders/my
orderRoutes.get('/', auth, isAdmin, getAllOrders); // GET /api/orders
orderRoutes.patch('/:id/status', auth, isAdmin, updateOrderStatus); // PATCH /api/orders/:id/status
