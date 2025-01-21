import mongoose, { Schema } from 'mongoose';
const timemanagementSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  employee_id: {
    type: Schema.Types.ObjectId,
    ref: 'Employee', 
    required: true,
  },

  clock_in:{
   type: Date,
   required: false,
  },

  clock_out:{
    type: Date,
    required: false,
  },

  clock_in_location: {
    type: Object,
    required: false,   // default: { type: "Point", coordinates: [0, 0] } showroom address
  },

  clock_out_location: {
    type: Object,
    required: false,   // default: { type: "Point", coordinates: [0, 0] } showroom address
  }


});

export const TimeManagement = mongoose.model("TimeTracker", timemanagementSchema);