/* @flow */

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const customerSchema: Object = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  street: { type: String },
  cellphone: { type: String },
  city: { type: String },
  state: { type: String },
  createdAt: { type: Date, default: Date.now },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] 
});

const Customer: Object = mongoose.model('Customer', customerSchema);
export default Customer;