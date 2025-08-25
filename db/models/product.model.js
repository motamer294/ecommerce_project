import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    category: { type: String, trim: true },
    image: { type: String }
  },
  { timestamps: true, versionKey: false }
);

export const Product = model('Product', productSchema);
