import { Router } from "express";

import OrdersController from "../controllers/orders";

import checkToken from "../middlewares/check-token";

const ordersRouter = Router();

ordersRouter.get("/", OrdersController.getSelectedOrders);
ordersRouter.get("/:id", checkToken, OrdersController.getById);
ordersRouter.post("/", checkToken, OrdersController.create);
ordersRouter.patch("/:id", checkToken, OrdersController.updateById);
ordersRouter.delete("/:id", checkToken, OrdersController.deleteById);

export default ordersRouter;
