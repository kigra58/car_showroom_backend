import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
  },
  agent_id: {
    type: Number,
    required: true,
  },
  address_id: {
    type: Number,
    required: true,
  },
  car_id: {
    type: Number,
    required: true,
  },
  down_payment: {
    type: Number,
    required: true,
  },
  payment_id: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'], // Replace with actual BookingStatus enum values
    required: true,
  },
});

export const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
