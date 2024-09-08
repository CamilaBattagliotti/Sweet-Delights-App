import { readFile, writeFile } from "jsonfile";

class OrdersModel {
  static async read() {
    try {
      return await readFile("./src/database/orders.json");
    } catch (error) {
      throw error;
    }
  }

  static async write(data) {
    try {
      await writeFile("./src/database/orders.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default OrdersModel;
