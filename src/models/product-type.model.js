const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const productTypeSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    brandId: { type: Schema.Types.UUID, ref: 'Brand' },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// TODO: add createdAt, updatedAt as plugin.
// add plugin that converts mongoose to json
productTypeSchema.plugin(toJSON);

/**
 * @typedef ProductType
 */
const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = ProductType;
