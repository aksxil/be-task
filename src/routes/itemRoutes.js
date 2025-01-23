const express = require('express');
const {
  createItem,
  getItems,
  getItemsByCategoryId,
  getItemsBySubCategoryId,
  getItemById,
  updateItem,
  searchItemByName,
} = require('../controllers/itemController');

const router = express.Router();

router.post('/:subCategoryId', createItem);
router.get('/', getItems);
router.get('/category/:categoryId', getItemsByCategoryId);
router.get('/subcategory/:subCategoryId', getItemsBySubCategoryId);
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.get('/search/:name', searchItemByName);

module.exports = router;
