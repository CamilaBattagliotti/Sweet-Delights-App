"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../services/products"));
class ProductsController {
    static async getSelectedProducts(req, res, next) {
        try {
            const products = await products_1.default.getSelectedProducts(req.query);
            res.status(200).json({ data: products });
        }
        catch (error) {
            next(error);
        }
    }
    static async getById(req, res, next) {
        try {
            const product = await products_1.default.getById(req.params.id);
            res.status(200).json({ product: product });
        }
        catch (error) {
            next(error);
        }
    }
    static async create(req, res, next) {
        try {
            await products_1.default.create(req.body);
            res.status(201).json({ message: "Producto agregado exitosamente" });
        }
        catch (error) {
            next(error);
        }
    }
    static async updateById(req, res, next) {
        try {
            const product = await products_1.default.updateById(req.params.id, req.body);
            res
                .status(200)
                .json({ message: "Cambios agregados exitosamente", product: product });
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteById(req, res, next) {
        try {
            await products_1.default.deleteById(req.params.id);
            res.status(200).json({ message: "Producto eliminado exitosamente" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ProductsController;
