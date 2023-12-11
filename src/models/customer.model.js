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
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);
// add plugin that converts mongoose to json
customerSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * @typedef Customer
 */
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
