 import mongoose from 'mongoose';
 const clientSchema = new mongoose.Schema({
  
    name: {
      type: String,
      required: true,
    },
     
    email: {
      type: String,
      required: false,
    },
     
    phone: {
      type: String,
      required: true,
    },
     
    address: {
      type: String,
      required: false,
    },
     
    city: {
      type: String,
      required: false,
    },
     
    state: {
      type: String,
      required: false,
    },
     
    zip_code: {
      type: String,
      required: false,
    },
     
    country: {
      type: String,
      required: false,
    },
     
    timestamps: { createdAt: "created_at"},
    
 });

 export const Client = mongoose.model("Client", clientSchema);
