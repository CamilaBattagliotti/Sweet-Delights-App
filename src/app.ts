import express, { json } from "express";

import indexRouter from "./routes";

const app = express();

app.use(json());

app.use("status", (req, res) =>
  res.json({ environment: process.env.ENVIRONMENT })
);

app.use("/", indexRouter);

export default app;
