import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserAddressSchema = new Schema({
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: "Employee", // Reference to the User schema
    required: true,
  },
  line1: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
  },
  zip_code: {
    type: String,
    required: true,
  },
});

export const Address = mongoose.model('Address', UserAddressSchema);


