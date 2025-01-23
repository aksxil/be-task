const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

exports.createItem = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const { name, image, description, taxApplicable, tax, baseAmount, discount } = req.body;

    const subCategory = await SubCategory.findById(subCategoryId).populate('category');
    if (!subCategory) {
      return res.status(404).json({ message: 'Sub-category not found' });
    }

    const totalAmount = baseAmount - (discount || 0);

    const item = new Item({
      name,
      image,
      description,
      taxApplicable: taxApplicable ?? subCategory.taxApplicable,
      tax: tax ?? subCategory.tax,
      baseAmount,
      discount,
      totalAmount,
      subCategory: subCategoryId,
      category: subCategory.category._id,
    });

    await item.save();
    subCategory.items.push(item._id);
    await subCategory.save();

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('subCategory category');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
};

exports.getItemsByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const items = await Item.find({ category: categoryId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
};

exports.getItemsBySubCategoryId = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const items = await Item.find({ subCategory: subCategoryId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('subCategory category');
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item', error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error: error.message });
  }
};

exports.searchItemByName = async (req, res) => {
  try {
    const { name } = req.params;
    const items = await Item.find({ name: { $regex: name, $options: 'i' } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error searching item', error: error.message });
  }
};
