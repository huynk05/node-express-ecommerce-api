const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const productImageSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    productId: { 
      type: 'UUID',
      ref: 'Product'
    },
    productVariantId: { 
      type: 'UUID',
      ref: 'ProductVariant'
    },
    imageUrl: {
      type: String,
    },
    alt: {
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
productImageSchema.plugin(toJSON);

/**
 * @typedef ProductImage
 */
const ProductImage = mongoose.model('ProductImage', productImageSchema);

module.exports = ProductImage;
