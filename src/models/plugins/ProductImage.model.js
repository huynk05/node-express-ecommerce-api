const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const ProductImageSchema = mongoose.Schema({
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
      variant: {
        type: String,
        ref: 'ProductVariant',
        required: true,
      }, 
      imageurl:{
        type: BigInt,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      }
    },{timestamps: true})

const ProductImage = mongoose.model('Product_image', ProductImageSchema)

module.exports = ProductImage;
