import mongoose from 'mongoose';
import { PAYMENT_MODE, PAYMENT_STATUS } from '../constant';



const Schema = mongoose.Schema;

const UserPaymentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User schema
    required: true,
  },
  transaction_id: {
    type: String,
    unique: true,
    required: true,
  },
  method: {
    type: String,
    enum: PAYMENT_MODE, // Replace with actual PaymentMode values
    required: true,
  },
  status: {
    type: String,
    enum: PAYMENT_STATUS, // PaymentStatus values
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model('Payment', UserPaymentSchema);

module.exports = Payment;