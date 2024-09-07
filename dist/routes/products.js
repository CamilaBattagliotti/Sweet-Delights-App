"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../controllers/products"));
const productsRouter = (0, express_1.Router)();
productsRouter.get("/", products_1.default.getSelectedProducts);
productsRouter.get("/:id", products_1.default.getById);
productsRouter.post("/", products_1.default.create);
productsRouter.patch("/:id", products_1.default.updateById);
productsRouter.delete("/:id", products_1.default.deleteById);
exports.default = productsRouter;
