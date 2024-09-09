import OrdersModel from "../models/orders";

import { validateOrder, validateUpdatedOrder } from "../schemas/orders";

import { v4 as uuidv4 } from "uuid";

class OrdersService {
  static async getSelectedOrders(opt) {
    try {
      const { orders } = await OrdersModel.read();

      if (Object.entries(opt).length == 0) {
        return orders;
      }

      const filteredOrders = orders.filter((order) =>
        order.client.includes(opt.client)
      );

      return filteredOrders;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      const db = await OrdersModel.read();
      const order = db.orders.find((order) => order.id == id);

      if (!order) {
        const error = new Error("Pedido no encontrado");
        error["statusCode"] = 404;
        throw error;
      }
      return order;
    } catch (error) {
      throw error;
    }
  }

  static async create(order) {
    try {
      const result = validateOrder(order);

      if (!result.success) {
        const error = new Error("Datos faltantes o invalidos");
        error["statusCode"] = 400;
        error["issues"] = result.error.issues;

        throw error;
      }

      const db = await OrdersModel.read();

      const id = uuidv4();

      const newOrder = { id, ...result.data };

      db.orders.push(newOrder);

      await OrdersModel.write(db);

      return newOrder;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data) {
    try {
      const result = validateUpdatedOrder(data);
      const db = await OrdersModel.read();

      let orders = db.orders.map((order) =>
        order.id == id ? { ...order, ...result.data } : order
      );

      db.orders = orders;

      await OrdersModel.write(db);
      return this.getById(id);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      const db = await OrdersModel.read();
      const filteredOrders = db.orders.filter((order) => order.id != id);

      if (filteredOrders.length == db.orders.length) {
        const error = new Error("El pedido indicado no fue encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      db.orders = filteredOrders;

      await OrdersModel.write(db);
    } catch (error) {
      throw error;
    }
  }
}

export default OrdersService;
