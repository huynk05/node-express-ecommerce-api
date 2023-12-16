const { mongoose, Schema } = require('mongoose');
const { toJSON, paginate } = require('./plugins');
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
    _id: false,
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);

// TODO: add createdAt, updatedAt as plugin.
// add plugin that converts mongoose to json
productTypeSchema.plugin(toJSON);
productTypeSchema.plugin(paginate);

productTypeSchema.statics.isProductTypeTaken = async function (name, brandId) {
  const type = await this.findOne({name, brandId})
  return !!type
}

/**
 * @typedef ProductType
 */
const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = ProductType;
