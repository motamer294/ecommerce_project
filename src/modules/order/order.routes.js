import { Router } from 'express';
import { verifyToken, isAdmin } from '../../middleware/auth.js';
import { createOrder, getAllOrders, getMyOrders, updateOrderStatus } from './order.controller.js';

export const orderRoutes = Router();

orderRoutes.post('/', verifyToken, createOrder); // POST /api/orders
orderRoutes.get('/my', verifyToken, getMyOrders); // GET /api/orders/my
orderRoutes.get('/', verifyToken, isAdmin, getAllOrders); // GET /api/orders
orderRoutes.patch('/:id/status', verifyToken, isAdmin, updateOrderStatus); // PATCH /api/orders/:id/status
