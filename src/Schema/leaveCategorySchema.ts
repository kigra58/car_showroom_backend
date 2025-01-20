
import mongoose
 from "mongoose";
const leaveCategorySchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: false,
    },

   number_of_days:{
         type: Number,
         required: true,
   },

   timestamps: { createdAt: "created_at" },

});


export const Leave = mongoose.model("LeaveCategory", leaveCategorySchema);
