import mongoose, { Schema } from 'mongoose';
const timemanagementSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User schema
    required: true,
  },


});

export const TimeManagement = mongoose.model("TimeManagement", timemanagementSchema);