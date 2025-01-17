

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
  user_role: {
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
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export const User = mongoose.model('User', UserSchema);

module.exports = User;
