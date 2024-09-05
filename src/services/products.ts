import ProductsModel from "../models/products";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../utils/types";

class ProductsService {
  static getAll() {
    try {
      const products = ProductsModel.read();
      return products.products;
    } catch (error) {
      throw error;
    }
  }
  static getById(id: string) {
    try {
      const products = this.getAll();
      const product = products.find((prod) => prod.id == id);

      if (!product) {
        const error = new Error("Producto no encontrado");
        error["statusCode"] = 404;
        throw error;
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
  static create(product: Product) {
    try {
      const db = ProductsModel.read();

      const id = uuidv4();
      const { type, name, flavour, filling, complements, price } = product;

      const newProduct = {
        id,
        type,
        name,
        flavour,
        filling,
        complements,
        price,
      };

      db.products.push(newProduct);

      ProductsModel.write(db);

      return newProduct;
    } catch (error) {
      throw error;
    }
  }
  static updateById(id: string, data) {
    try {
      const db = ProductsModel.read();

      let products = db.products.map((prod) =>
        prod.id == id ? { ...prod, ...data } : prod
      );

      // if (!product) {
      //   const error = new Error("Producto no encontrado");
      //   error["statusCode"] = 404;

      //   throw error;
      // }

      db.products = products;

      ProductsModel.write(db);
    } catch (error) {
      throw error;
    }
  }
  static deleteById(id: string) {
    try {
      const db = ProductsModel.read();
      const filteredProducts = db.products.filter((prod) => prod.id != id);

      if (filteredProducts.length == db.products.length) {
        const error = new Error("El producto indicado no fue encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      db.products = filteredProducts;

      ProductsModel.write(db);
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
