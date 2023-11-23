const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const settingSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    shopName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    currency: {
      type: Schema.Types.BigInt,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
settingSchema.plugin(toJSON);

/**
 * @typedef Setting
 */
const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
