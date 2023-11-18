const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productVariantSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  product: {
    type: String,
    ref: 'Product',
    required: true,
  },
  description: String,
  image: {
    type: String,
    ref: 'ProductImage',
    required: true,
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    trim: true,
  },
  quantity: {
    type: BigInt,
    required: true,
    trim: true,
  },
},{
  timestamps: true,
})


const ProductVariant = mongoose.model('Product_variant', productVariantSchema);

module.exports = ProductVariant;
