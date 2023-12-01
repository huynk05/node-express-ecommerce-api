const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { payment, fullfillment } = require('../config/roles');
const { randomUUID } = require('crypto');

const orderSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    customerId: {
      type: Schema.Types.UUID,
      ref: 'Customer',
    },
    number: {
      type: Schema.Types.BigInt,
    },
    code: {
      type: String,
    },
    paymentGateway: {
      type: String,
      enum: payment,
      default: payment[0],
    },
    shoppingAddress: {
      type: String,
      required: true,
    },
    fullfillmentStatus: {
      type: String,
      enum: fullfillment,
      default: fullfillment[0],
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);
// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
