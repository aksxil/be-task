const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

exports.createSubCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, image, description, taxApplicable, tax } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const subCategory = new SubCategory({
      name,
      image,
      description,
      taxApplicable: taxApplicable ?? category.taxApplicable,
      tax: tax ?? category.tax,
      category: categoryId,
    });

    await subCategory.save();
    category.subCategories.push(subCategory._id);
    await category.save();

    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating sub-category', error: error.message });
  }
};

exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category');
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sub-categories', error: error.message });
  }
};

exports.getSubCategoriesByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await SubCategory.find({ category: categoryId });
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sub-categories', error: error.message });
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate('category');
    if (!subCategory) {
      return res.status(404).json({ message: 'Sub-category not found' });
    }
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sub-category', error: error.message });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) {
      return res.status(404).json({ message: 'Sub-category not found' });
    }
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating sub-category', error: error.message });
  }
};
