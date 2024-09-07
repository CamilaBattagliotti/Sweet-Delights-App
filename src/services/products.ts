import { v4 as uuidv4 } from "uuid";
import ProductsModel from "../models/products";
import { Product } from "../utils/types";
import { validateProduct, validateUpdatedProduct } from "../schemas/products";

class ProductsService {
  static async getSelectedProducts(choclo) {
    try {
      const { products } = await ProductsModel.read();

      if (Object.entries(choclo).length == 0) {
        return products;
      }

      const filteredProducts = products.filter((prod) =>
        prod.type.includes(choclo.type)
      );

      return filteredProducts;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      const db = await ProductsModel.read();
      const product = db.products.find((prod) => prod.id == id);

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

  static async create(product) {
    try {
      const result = validateProduct(product);
      // console.log("Soy el producto  ", product);
      // console.log("Soy el result data  ", result.data);
      // console.log(result.error.issues);

      if (!result.success) {
        const error = new Error("Datos faltantes o invalidos");
        error["statusCode"] = 400;
        error["issues"] = result.error.issues;

        throw error;
      }

      const db = await ProductsModel.read();

      const id = uuidv4();

      const newProduct = { id, ...result.data };
      // console.log("Soy el NEW producto  ", newProduct);

      // const { type, name, flavour, filling, complements, price } = product;

      // const newProduct = {
      //   id,
      //   type,
      //   name,
      //   flavour,
      //   filling,
      //   complements,
      //   price,
      // };

      db.products.push(newProduct);

      await ProductsModel.write(db);

      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data) {
    try {
      const result = validateUpdatedProduct(data);
      const db = await ProductsModel.read();

      let products = db.products.map((prod) =>
        prod.id == id ? { ...prod, ...result.data } : prod
      );

      db.products = products;

      await ProductsModel.write(db);
      return this.getById(id);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      const db = await ProductsModel.read();
      const filteredProducts = db.products.filter((prod) => prod.id != id);

      if (filteredProducts.length == db.products.length) {
        const error = new Error("El producto indicado no fue encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      db.products = filteredProducts;

      await ProductsModel.write(db);
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
