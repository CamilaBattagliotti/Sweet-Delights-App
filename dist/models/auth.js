"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = require("jsonfile");
class AuthModel {
    static async read() {
        try {
            const db = await (0, jsonfile_1.readFile)("./src/database/auth.json");
            return db;
        }
        catch (error) {
            throw error;
        }
    }
    static async write(data) {
        try {
            await (0, jsonfile_1.writeFile)("./src/database/auth.json", data);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = AuthModel;
