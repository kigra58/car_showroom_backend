import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3021, () => {
  console.log("==========server listenting at port at 3021");
});
