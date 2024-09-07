import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static async getSelectedProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await ProductsService.getSelectedProducts(req.query);

      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductsService.getById(req.params.id);
      res.status(200).json({ product: product });
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.create(req.body);
      res.status(201).json({ message: "Producto agregado exitosamente" });
    } catch (error) {
      next(error);
    }
  }
  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductsService.updateById(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Cambios agregados exitosamente", product: product });
    } catch (error) {
      next(error);
    }
  }
  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.deleteById(req.params.id);
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
