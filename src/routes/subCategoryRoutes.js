const express = require('express');
const {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategoryId,
  getSubCategoryById,
  updateSubCategory,
} = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/:categoryId', createSubCategory);
router.get('/', getSubCategories);
router.get('/category/:categoryId', getSubCategoriesByCategoryId);
router.get('/:id', getSubCategoryById);
router.put('/:id', updateSubCategory);

module.exports = router;
