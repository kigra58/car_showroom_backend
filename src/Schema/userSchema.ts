

import mongoose from 'mongoose';
import { USER_ROLE } from '../constant';



const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
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
  account_type: {
    type: String,
    required: true,
    enum: USER_ROLE, // Replace with actual account types as needed
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Address', // Refer to the UserAddress schema
    },
  ],
  UserPayment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Payment', // Refer to the UserPayment schema
    },
  ],
});

export const User = mongoose.model('User', UserSchema);

module.exports = User;
