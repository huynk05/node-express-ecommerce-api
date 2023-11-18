const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const OrderSchema = mongoose.Schema({
    _id: {
      type: String,
      default: uuidv4,
      unique: true
    },
    number: {
        type: BigInt,
        required: true,
    },
    code: {
      type: String,
      unique: true,
      trim: true, 
    },
    paymentGateway: {
      type: String,
      enum: ['Gateway1', 'Gateway2', 'Gateway3'],
    },
    shoppingAddress: {
      type: String,
      required: true,
    },
    fulfillmentStatus: {
      type: Boolean,
      default: false,
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
    customer: {
      type: String,
      ref: 'Customer',
    },
},{
    timestamps: true,
  })

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;
