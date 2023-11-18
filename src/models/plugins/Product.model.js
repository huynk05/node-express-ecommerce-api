const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const productSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: String,
    isActive: {
        type: Boolean,
        default: true,
      },
    image: {
        type: String,
        ref: 'ProductImage',
        required: true,
      },
    type: {
      type: String,
      ref: 'ProductType',
      required: true,
    },
    vendor: String,
},{
    timestamps: true,
  })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
