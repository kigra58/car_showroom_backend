import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",router);

app.listen(3021, () => {
  console.log("==========server listenting at port at 3021");
});
