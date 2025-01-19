import mongoose from "mongoose";
import { DEPARTMENT_PERMISSION } from "../constant";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  orgnization_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orgnization",
    required: true,
  },

  permission: {
    type: Array,
    required: true,
    default: [DEPARTMENT_PERMISSION.BOOKING, DEPARTMENT_PERMISSION.INQUIRY],
  },

  timestamps: { createdAt: "created_at" },
});
export const Department = mongoose.model("Department", departmentSchema);
