import mongoose, { Schema } from "mongoose";
const employeeSchema = new mongoose.Schema({
  department_id: {
    type: Schema.Types.ObjectId,
    ref: "Department", 
    required: true,
  },

  orgnization_id: {
    type: Schema.Types.ObjectId,
    ref: "Orgnizaton", 
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Address', 
    },
  ],

  timestamps: { createdAt: "created_at" },
});
export const Car = mongoose.model("Employee", employeeSchema);
