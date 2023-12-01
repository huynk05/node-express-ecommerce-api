const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const productVariantSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    productId: {
      type: 'UUID',
      ref: 'Product',
    },
    image: {
      type: 'UUID',
      ref: 'ProductImage',
    },
    description: {
      type: String,
    },
    price: {
      type: Schema.Types.Decimal128,
      default: '0',
    },
    quantity: {
      type: Schema.Types.BigInt,
      default: '1',
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);

// TODO: add createdAt, updatedAt as plugin.
// add plugin that converts mongoose to json
productVariantSchema.plugin(toJSON);

/**
 * @typedef ProductVariant
 */
const ProductVariant = mongoose.model('Productvariant', productVariantSchema);

module.exports = ProductVariant;
