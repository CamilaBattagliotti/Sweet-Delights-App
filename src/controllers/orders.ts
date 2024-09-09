import { NextFunction, Request, Response } from "express";

import OrdersService from "../services/orders";

class OrdersController {
  static async getSelectedOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orders = await OrdersService.getSelectedOrders(req.query);

      res.status(200).json({ data: orders });
    } catch (error) {
      next(error);
    }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrdersService.getById(req.params.id);
      res.status(200).json({ order: order });
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newOrder = await OrdersService.create(req.body);
      res.status(201).json({
        message: "Pedido agregado exitosamente",
        newOrder,
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrdersService.updateById(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Cambios agregados exitosamente", order });
    } catch (error) {
      next(error);
    }
  }
  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      await OrdersService.deleteById(req.params.id);
      res.status(200).json({ message: "Pedido eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default OrdersController;
