const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const brandSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
brandSchema.plugin(toJSON);

/**
 * @typedef Brand
 */
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
