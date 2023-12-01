const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const brandSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
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
    toJSON: { getters: true, virtuals: false },
  }
);
// add plugin that converts mongoose to json
brandSchema.plugin(toJSON);

/**
 * 
 */
brandSchema.statics.isBrandTaken = async function (name, country) {
  const brand = await this.findOne({name, country})
  console.log(name);
  return !!brand
}

/**
 * @typedef Brand
 */
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
