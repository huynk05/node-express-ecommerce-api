const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const brandSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.UUID,
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
