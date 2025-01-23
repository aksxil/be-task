const express = require('express');
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);

module.exports = router;
