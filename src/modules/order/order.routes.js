
const router = require('express').Router();
const { auth, isAdmin } = require('../../middleware/auth');
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
} = require('./order.controller');


router.post('/', auth, createOrder);
router.get('/my', auth, getMyOrders);


router.get('/', auth, isAdmin, getAllOrders);
router.patch('/:id/status', auth, isAdmin, updateOrderStatus);

module.exports = router;
