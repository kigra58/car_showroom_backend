import mongoose from "mongoose";
const soldCarSchema = new mongoose.Schema({
  car_id: {
    type: String,
    required: true,
  },

  client_id: {
    type: String,
    required: true,
  },

  agent_id: {
    type: String,
    required: true,
  },

   
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: false,
  },

  model: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: false,
  },

  manufacture_year: {
    type: String,
    required: false,
  },

  price: {
    type: Number,
    required: true,
  },

  timestamps: { createdAt: "created_at" },
});
export const SelledCar = mongoose.model("SoldCar", soldCarSchema);
