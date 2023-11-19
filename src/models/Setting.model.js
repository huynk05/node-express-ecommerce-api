const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const SettingSchema = mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    shopname: {
        type: mongoose.Schema.Types.Mixed,
        bsonType: 'BigInt',
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: mongoose.Schema.Types.Mixed,
        bsonType: 'BigInt',
        required: true,
        unique: true,
        trim: true,
    },
    cuurency: {
        type: mongoose.Schema.Types.Mixed,
        bsonType: 'BigInt',
        required: true,
        unique: true,
        trim: true,
    },
},{
    timestamps: true,
  })

const Setting = mongoose.model('Setting', SettingSchema)

module.exports = Setting;
