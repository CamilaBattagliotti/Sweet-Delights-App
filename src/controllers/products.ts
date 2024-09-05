import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = ProductsService.getAll();
      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
  static getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = ProductsService.getById(req.params.id);
      res.status(200).json({ product: product });
    } catch (error) {
      next(error);
    }
  }
  static create(req: Request, res: Response, next: NextFunction) {
    try {
      ProductsService.create(req.body);
      res.status(201).json({ message: "Producto agregado exitosamente" });
    } catch (error) {
      next(error);
    }
  }
  static updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = ProductsService.updateById(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Cambios agregados exitosamente", data: product });
    } catch (error) {
      next(error);
    }
  }
  static deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      ProductsService.deleteById(req.params.id);
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
