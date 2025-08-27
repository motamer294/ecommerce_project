import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../db/models/user.model.js';
import { sendMail } from '../../utilities/Email/sendMail.js';



export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json({ message: 'All Users', users });
};

export const register = async (req, res) => {
  const { name, email, password, age } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  const addedUser = await User.create({ name, email, password: hash, age });
  try {
    await sendMail(email);
  } catch (e) {
    // Do not fail registration if mail fails in dev/demo
    console.warn('Email send failed:', e.message);
  }
  const { password: _, ...safe } = addedUser.toObject();
  res.status(201).json({ message: 'registered successfully', user: safe });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const exist = await User.findOne({ email });
  if (!exist) return res.status(404).json({ message: 'user not found, please register' });
  const matched = bcrypt.compareSync(password, exist.password);
  if (!matched) return res.status(400).json({ message: 'email or password invalid' });

  const token = jwt.sign({ _id: exist._id, role: exist.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || '7d'
  });
  if (!exist.isConfirmed) return res.json({ message: 'Please Confirm Your Email' });
  res.json({ message: `welcome ${exist.name}`, token });
};

export const verifyAccount = async (req, res) => {
  const { email: token } = req.params;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET + '_MAIL');
    await User.findOneAndUpdate({ email: decoded.email }, { isConfirmed: true });
    res.json({ message: 'confirmed successfully' });
  } catch (err) {
    res.status(400).json({ message: 'invalid token', error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const update = { ...req.body };
  if (update.password) update.password = bcrypt.hashSync(update.password, 8);
  const updatedUser = await User.findByIdAndUpdate(id, update, { new: true }).select('-password');
  res.json({ message: 'updated successfully', updatedUser });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id).select('-password');
  res.json({ message: 'deleted successfully', deletedUser });
};

