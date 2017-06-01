'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CheckRequestSchema = new Schema({
  name: {
    type: String,
    Required: 'Please enter the name'
  },
  secondNameCompany: {
    type: String
  },
  addressLine1: {
    type: String,
    Required: 'Please enter the address'
  },
  addressLine2: {
    type: String
  },
  city: {
    type: String,
    Required: 'Please enter the city'
  },
  state: {
    type: String,
    Required: 'Please enter the state'
  },
  zipCode: {
    type: String,
    Required: 'Please enter the Zip Code'
  },
  routingNumber: {
    type: String,
    Required: 'Please enter the Routing Number'
  },
  accountNumber: {
    type: String,
    Required: 'Please enter the Account Number'
  },
  startingCheckNumber: {
    type: String,
    Required: 'Please enter the Starting Check Number'
  },
  checkNumberPrefix: {
    type: String
  },
  bankName: {
    type: String,
    Required: 'Please enter the Bank Name'
  },
  quantity: {
    type: Number,
    Required: 'Please enter quantity'
  },
  unitAmount: {
    type: Number,
    Required: 'Please enter the unit amount'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('CheckRequest', CheckRequestSchema);