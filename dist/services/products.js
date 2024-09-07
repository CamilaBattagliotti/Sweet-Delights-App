"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const products_1 = __importDefault(require("../models/products"));
const products_2 = require("../schemas/products");
class ProductsService {
    static async getSelectedProducts(choclo) {
        try {
            const { products } = await products_1.default.read();
            if (Object.entries(choclo).length == 0) {
                return products;
            }
            const filteredProducts = products.filter((prod) => prod.type.includes(choclo.type));
            return filteredProducts;
        }
        catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            const db = await products_1.default.read();
            const product = db.products.find((prod) => prod.id == id);
            if (!product) {
                const error = new Error("Producto no encontrado");
                error["statusCode"] = 404;
                throw error;
            }
            return product;
        }
        catch (error) {
            throw error;
        }
    }
    static async create(product) {
        try {
            const result = (0, products_2.validateProduct)(product);
            // console.log("Soy el producto  ", product);
            // console.log("Soy el result data  ", result.data);
            // console.log(result.error.issues);
            if (!result.success) {
                const error = new Error("Datos faltantes o invalidos");
                error["statusCode"] = 400;
                error["issues"] = result.error.issues;
                throw error;
            }
            const db = await products_1.default.read();
            const id = (0, uuid_1.v4)();
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
            await products_1.default.write(db);
            return newProduct;
        }
        catch (error) {
            throw error;
        }
    }
    static async updateById(id, data) {
        try {
            const result = (0, products_2.validateUpdatedProduct)(data);
            const db = await products_1.default.read();
            let products = db.products.map((prod) => prod.id == id ? { ...prod, ...result.data } : prod);
            db.products = products;
            await products_1.default.write(db);
            return this.getById(id);
        }
        catch (error) {
            throw error;
        }
    }
    static async deleteById(id) {
        try {
            const db = await products_1.default.read();
            const filteredProducts = db.products.filter((prod) => prod.id != id);
            if (filteredProducts.length == db.products.length) {
                const error = new Error("El producto indicado no fue encontrado");
                error["statusCode"] = 404;
                throw error;
            }
            db.products = filteredProducts;
            await products_1.default.write(db);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ProductsService;
