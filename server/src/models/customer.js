import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  street: { type: String },
  number: { type: String },
  city: { type: String },
  state: { type: String },
  createdAt: { type: Date, default: Date.now },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] 
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;