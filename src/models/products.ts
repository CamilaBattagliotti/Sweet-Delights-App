import { readFile, writeFile } from "jsonfile";

import { Product } from "../utils/types";

class ProductsModel {
  static async read() {
    try {
      return await readFile("./src/database/products.json");
    } catch (error) {
      throw error;
    }
  }

  static async write(data) {
    try {
      await writeFile("./src/database/products.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsModel;
