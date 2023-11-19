const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productVariantSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
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
    type: mongoose.Schema.Types.Mixed,
    bsonType: 'BigInt',
    required: true,
    trim: true,
  },
},{
  timestamps: true,
})


const ProductVariant = mongoose.model('Product_variant', productVariantSchema);

module.exports = ProductVariant;
