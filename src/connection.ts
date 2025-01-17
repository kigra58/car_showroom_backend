import mongoose from "mongoose";


export const conn = async (url: string) => {
  // console.log("===============", url);
  await mongoose.connect(url);
  console.log("======connection===successfully=====");
};
