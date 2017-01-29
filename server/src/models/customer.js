import mongoose, { Schema, Model } from 'mongoose';

const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  street: { type: String },
  number: { type: String },
  city: { type: String },
  state: { type: String },
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }] 
});

export const Customer = Model('Customer', customerSchema);
export default Customer;