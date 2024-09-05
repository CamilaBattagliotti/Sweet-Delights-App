import { Router } from "express";

import authRouter from "./auth";
import productsRouter from "./products";

import checkToken from "../middlewares/check-token";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/products", productsRouter);

export default indexRouter;
