const { mongoose, Schema } = require('mongoose');
const { toJSON } = require('./plugins');

const orderlineSchema = mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    productVariantId: { type: Schema.Types.UUID, ref: 'ProductVariant' },
    orderId: {
      type: Schema.Types.UUID,
      ref: 'Order',
    },
    quantity: {
      type: Schema.Types.BigInt,
    },
    price: {
      type: Schema.Types.BigInt,
    },
  },
  {
    timestamps: true,
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
