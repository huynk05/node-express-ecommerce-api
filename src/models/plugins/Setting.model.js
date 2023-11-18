const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const productSchema = mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    shopname: {
        type: BigInt,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: BigInt,
        required: true,
        unique: true,
        trim: true,
    },
    cuurency: {
        type: BigInt,
        required: true,
        unique: true,
        trim: true,
    },
},{
    timestamps: true,
  })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
