const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const customerSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
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
  }
);
// add plugin that converts mongoose to json
customerSchema.plugin(toJSON);

/**
 * @typedef Customer
 */
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
