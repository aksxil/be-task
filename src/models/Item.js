const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: false },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number },
  totalAmount: { type: Number },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Item', itemSchema);
