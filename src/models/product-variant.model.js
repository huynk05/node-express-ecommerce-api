const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const productVariantSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    productId: {
      type: Schema.Types.UUID,
      ref: 'Product',
    },
    image: {
      type: Schema.Types.UUID,
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
