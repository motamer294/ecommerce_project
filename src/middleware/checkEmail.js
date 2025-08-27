import User from '../db/models/user.model.js';

export const checkEmail = async (req, res, next) => {
  const exist = await User.findOne({ email: req.body.email });
  if (exist) return res.status(409).json({ message: 'User already registered, please login' });
  next();
};
