const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const ProductTypeSchema = mongoose.Schema({
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
    brand: {
        type: String,
        ref: 'Brand',
        required: true,
    },
    description: String,
},{
    timestamps: true,
  })

const ProductType = mongoose.model('Product_Type', ProductTypeSchema)

module.exports = ProductType;
