const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const customerSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: {
      type: String,
      required: true,
      trim: true,
  },
  address: {
    type: BigInt,
    required: true,
    trim: true,
  },
  phone: {
    type: BigInt,
    required: true,
    unique: true,
    trim: true,
  },
},{
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
