import { readFileSync, writeFileSync } from "jsonfile";
import { Product } from "../utils/types";

class ProductsModel {
  static read() {
    try {
      return readFileSync("./src/database/products.json");
    } catch (error) {
      throw error;
    }
  }

  static write(data) {
    try {
      writeFileSync("./src/database/products.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsModel;
