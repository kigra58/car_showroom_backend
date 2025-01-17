import express from "express";
import cors from "cors";
import { router } from "./routes";

import awsServerlessExpress from "aws-serverless-express";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { conn } from "./connection";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);
conn("mongodb://localhost:27017/");

app.get("/",(req,res)=>{
  res.status(200).send("Welcome");
});

app.listen(3021, () => {
  console.log("===server is Running at port at 3021===");
});

const server = awsServerlessExpress.createServer(app);
module.exports.handler = (event: APIGatewayProxyEvent , context: Context) =>
  awsServerlessExpress.proxy(server, event, context);
