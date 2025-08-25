import { Order } from '../../db/models/order.model.js';
import { Product } from '../../db/models/product.model.js';

export const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { items = [] } = req.body; // [{product, quantity}]

    if (!items.length) return res.status(400).json({ message: 'No items provided' });

    let totalPrice = 0;
    const populatedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      if (product.stock < item.quantity) return res.status(400).json({ message: `Not enough stock for ${product.name}` });

      product.stock -= item.quantity;
      await product.save();

      const price = product.price * item.quantity;
      totalPrice += price;
      populatedItems.push({ product: product._id, quantity: item.quantity, price: product.price });
    }

    const order = await Order.create({ user: userId, items: populatedItems, totalPrice });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('items.product');
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
};
