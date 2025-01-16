import mongoose from 'mongoose';


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
    enum: ['CREDIT_CARD', 'DEBIT_CARD', 'NET_BANKING', 'UPI', 'CASH'], // Replace with actual PaymentMode values
    required: true,
  },
  status: {
    type: String,
    enum: [
      'INITIATE',
      'SUCCESS',
      'FAILED',
      'PENDING',
      'REFUND_INITIATE',
      'REFUNDED',
    ], // PaymentStatus values
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

const UserAddress = mongoose.model('Payment', UserPaymentSchema);

module.exports = UserAddress;