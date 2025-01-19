import mongoose from "mongoose";
import { ORGNIZATION_PERMISSION } from "../constant";
const orgnizationSchema = new mongoose.Schema({
 
   name:{
         type: String,
         required: true,
   },
    
   address:{
        type: String,
        required: true,
   },

   permission:{
     type:Array,
     required:true,
     default:[ORGNIZATION_PERMISSION.BOOKING,ORGNIZATION_PERMISSION.INQUIRY]
   },
   
    status:{
        type: String,
        required: true,
    },

    timestamps: { createdAt: "created_at" },


});
export const Orgnization = mongoose.model("Orgnization", orgnizationSchema);
