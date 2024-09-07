"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = require("jsonfile");
class ProductsModel {
    static async read() {
        try {
            return await (0, jsonfile_1.readFile)("./src/database/products.json");
        }
        catch (error) {
            throw error;
        }
    }
    static async write(data) {
        try {
            await (0, jsonfile_1.writeFile)("./src/database/products.json", data);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ProductsModel;
