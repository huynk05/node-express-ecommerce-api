const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');
const { randomUUID } = require('crypto');

const orderlineSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    productVariantId: { 
      type: 'UUID',
      ref: 'ProductVariant'
    },
    orderId: {
      type: 'UUID',
      ref: 'Order',
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    _id: false,
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);

// TODO: add createdAt, updatedAt as plugin.
// add plugin that converts mongoose to json
orderlineSchema.plugin(toJSON);

/**
 * @typedef Orderline
 */
const Orderline = mongoose.model('Orderline', orderlineSchema);

module.exports = Orderline;
