import mongoose, { Schema } from 'mongoose';
const timemanagementSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },

  current_location: {
    type: Object,
    required: true,   // default: { type: "Point", coordinates: [0, 0] } showroom address
  },


});

export const TimeManagement = mongoose.model("TimeManagement", timemanagementSchema);