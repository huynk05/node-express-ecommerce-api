const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const settingSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    shopName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
    },
  },
  {
    _id: false,
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);
// add plugin that converts mongoose to json
settingSchema.plugin(toJSON);

/**
 * @typedef Setting
 */
const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
