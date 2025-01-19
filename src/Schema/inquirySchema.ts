import mongoose from "mongoose";
import { INQUIRY_STATUS } from "../constant";
const Schema = mongoose.Schema;

const InquirySchema = new Schema({
  agent_id: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema
    required: true,
  },

  name: {
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

  car_name: {
    type: String,
    required: true,

  },
  car_brand: {
    type: String,
    required: false,
  
  },
  car_model: {
    type: String,
    required: true,

  },
  car_color: {
    type: String,
    required: false,
   
  },

  manufacture_year: {
    type: String,
    required: false,

  },

  client_address: {
    type: String,
    required: false,

  },

  current_location: {
    type: Object,
    required: true,   // default: { type: "Point", coordinates: [0, 0] } showroom address
  },
  

  status: {
    type: String,
    required: false,
    enum:INQUIRY_STATUS
  },

});

export const Inquiry = mongoose.model("Inquiry", InquirySchema);
