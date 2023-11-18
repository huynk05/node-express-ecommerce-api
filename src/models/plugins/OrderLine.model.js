const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const OrderLineSchema = mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    variant: {
        type: String,
        ref: 'ProductVariant',
        required: true,
    },
    orderId: {
        type: String,
        ref: 'Order',
        required: true,
    },
    price: {
        type: BigInt,
        required: true,
        trim: true,
    },
    quantity: {
        type: BigInt,
        required: true,
        trim: true,
    },
},{
    timestamps: true,
  })

const OrderLine = mongoose.model('OrderLine', OrderLineSchema)

module.exports = OrderLine;
