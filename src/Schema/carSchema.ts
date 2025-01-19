import mongoose from 'mongoose';
const carSchema = new mongoose.Schema({

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

  price:{
    type: Number,
    required: true,
  },
  
  in_stock: {
    type: Boolean,
    required: false,
  }

});

export const Car = mongoose.model("Car", carSchema);
