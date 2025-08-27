import Product from '../../db/models/product.model.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const productsData = require('./productsData.json');

// Seed function
export async function seedProducts(_req, res) {
  try {

    await Product.deleteMany({});

    const products = await Product.insertMany(productsData);
    res.status(201).json({ message: 'Products seeded successfully', products });
  } catch (err) {
    res.status(500).json({ message: 'Failed to seed products', error: err.message });
  }
}

export const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted' });
};

export const getAllProducts = async (_req, res) => {
  const products = await Product.find();
  res.json(products);
};
