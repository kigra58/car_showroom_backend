import express from "express";
import cors from "cors";
import { router } from "./routes";

import awsServerlessExpress from "aws-serverless-express";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",router);

app.listen(3021, () => {
  console.log("==========server listenting at port at 3021");
});

const server = awsServerlessExpress.createServer(app);
module.exports.handler = (event: APIGatewayProxyEvent , context: Context) =>
  awsServerlessExpress.proxy(server, event, context);
