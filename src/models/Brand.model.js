const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const BrandSchema = mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
      },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        unique: true,
    },
},{
    timestamps: true,
  })

const Brand = mongoose.model('brand', BrandSchema)
module.exports = Brand;
