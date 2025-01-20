import mongoose, { Schema } from "mongoose";
import { LEAVE_STATUS, LEAVE_TYPE } from "../constant";
const leaveSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },

  leave_category_id: {
    type: Schema.Types.ObjectId,
    ref: "LeaveCategory",
    required: true,
  },

  employee_id: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },

   reason: {
        type: String,
        required: true,
    },

   notifiy_to: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Empoyee', 
      required: true,
    },
  ],

  // category: number of days
  leave_balance: {
    type: Object,
    required: false
  },

  status:{
    type: String,
    required: true,
    default: LEAVE_STATUS.PENDING,
    enum:LEAVE_STATUS
  },

   timestamps: { createdAt: "created_at" }, 
});

export const Leave = mongoose.model("Leave", leaveSchema);
