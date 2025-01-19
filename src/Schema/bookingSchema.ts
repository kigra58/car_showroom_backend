import mongoose from 'mongoose';
import { BOOKING_STATUS } from '../constant';


const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  agent_id: {
    type: Number,
    required: true,
  },



  aadhar_id: {
    type: String,
    required: true,
  },

  pan_id: {
    type: String,
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

  token_amount: {
    type: Number,
    required: true,
  },

  final_amount: {
    type: Number,
    required: true,
  },

  payment_id: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    default:BOOKING_STATUS.INITIATE,
    enum: BOOKING_STATUS, 
    required: true,
  },

  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const Booking = mongoose.model('Booking', BookingSchema);

// module.exports = Booking;
