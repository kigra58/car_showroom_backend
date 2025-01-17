import mongoose from 'mongoose';
import { BOOKING_STATUS } from '../constant';


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
  status: {
    type: String,
    enum: BOOKING_STATUS, // Replace with actual BookingStatus enum values
    required: true,
  },
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
