import { Router } from "express";

import authRouter from "./auth";
import productsRouter from "./products";
import ordersRouter from "./orders";
import usersRouter from "./users";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productsRouter);
indexRouter.use("/orders", ordersRouter);

export default indexRouter;
