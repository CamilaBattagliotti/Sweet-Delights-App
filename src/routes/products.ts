import { Router } from "express";
import ProductsController from "../controllers/products";
import checkToken from "../middlewares/check-token";

const productsRouter = Router();

productsRouter.get("/", ProductsController.getSelectedProducts); // por queee no fx check-token
productsRouter.get("/:id", checkToken, ProductsController.getById);
productsRouter.post("/", checkToken, ProductsController.create);
productsRouter.patch("/:id", checkToken, ProductsController.updateById);
productsRouter.delete("/:id", checkToken, ProductsController.deleteById);

export default productsRouter;
