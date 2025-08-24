const router = require('express').Router();
const { auth, isAdmin } = require('../../middleware/auth');
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
} = require('./product.controller');

router.get('/', getAllProducts);


router.post('/', auth, isAdmin, addProduct);
router.patch('/:id', auth, isAdmin, updateProduct);
router.delete('/:id', auth, isAdmin, deleteProduct);

module.exports = router;
