"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = require("jsonfile");
class UsersModel {
    static async read() {
        try {
            return await (0, jsonfile_1.readFile)("./src/database/users.json");
        }
        catch (error) {
            throw error;
        }
    }
    static async write(data) {
        try {
            await (0, jsonfile_1.writeFile)("./src/database/users.json", data);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = UsersModel;
