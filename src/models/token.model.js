const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');
const { randomUUID } = require('crypto');

const tokenSchema = mongoose.Schema(
  {
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: 'UUID',
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
    timestamps: true,
    toJSON: { getters: true, virtuals: false },
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
