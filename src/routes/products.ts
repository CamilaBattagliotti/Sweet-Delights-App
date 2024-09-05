import { Router } from "express";
import ProductsController from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/:id", ProductsController.getById);
productsRouter.post("/", ProductsController.create);
productsRouter.patch("/:id", ProductsController.updateById);
productsRouter.delete("/:id", ProductsController.deleteById);

export default productsRouter;
