const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const paymentGateway = {
  values: ['Gateway1', 'Gateway2', 'Gateway3'],
};

const fullfillmentStatus = {
  values: [],
};

const orderSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
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
      enum: paymentGateway,
      default: paymentGateway.values[0],
    },
    shoppingAddress: {
      type: String,
      required: true,
    },
    fullfillmentStatus: {
      type: String,
      enum: fullfillmentStatus,
      default: fullfillmentStatus.values[0],
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
