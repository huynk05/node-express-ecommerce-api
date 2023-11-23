const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const productImageSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    productId: { type: Schema.Types.UUID, ref: 'Product' },
    productVariantId: { type: Schema.Types.UUID, ref: 'ProductVariant' },
    imageUrl: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  {
    timestamps: true,
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
