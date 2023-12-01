const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const productTypeSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    brandId: { type: 'UUID', ref: 'Brand' },
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
    toJSON: { getters: true, virtuals: false },
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
