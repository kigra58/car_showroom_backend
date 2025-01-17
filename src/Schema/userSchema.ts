

import mongoose from 'mongoose';


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
    enum: ['STANDARD', 'PREMIUM', 'ADMIN'], // Replace with actual account types as needed
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'UserAddress', // Refer to the UserAddress schema
    },
  ],
  UserPayment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'UserPayment', // Refer to the UserPayment schema
    },
  ],
});

export const User = mongoose.model('User', UserSchema);

module.exports = User;
