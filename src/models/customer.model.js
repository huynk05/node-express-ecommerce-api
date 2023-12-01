const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const customerSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: Schema.Types.BigInt,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);
// add plugin that converts mongoose to json
customerSchema.plugin(toJSON);

/**
 * @typedef Customer
 */
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
