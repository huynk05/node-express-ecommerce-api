const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const productSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    images: {
      type: 'UUID',
      ref: 'ProductImage',
    },
    productTypeId: {
      type: 'UUID',
      ref: 'ProductType',
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    vendor: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);

// TODO: add createdAt, updatedAt as plugin.
// add plugin that converts mongoose to json
productSchema.plugin(toJSON);

/**
 * @typedef ProductType
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
