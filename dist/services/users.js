"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
const uuid_1 = require("uuid");
class UsersService {
    static async read() {
        try {
            return await users_1.default.read();
        }
        catch (error) {
            throw error;
        }
    }
    static async create(data) {
        try {
            const { name, email } = data;
            const db = await this.read();
            const id = (0, uuid_1.v4)();
            db.users.push({ id, name, email });
            await users_1.default.write(db);
            return id;
        }
        catch (error) {
            throw error;
        }
    }
    static async getByEmail(email) {
        try {
            const db = await this.read();
            const user = db.users.find((user) => user.email == email);
            if (!user) {
                const error = new Error("Usuario no encontrado");
                error["statusCode"] = 404;
                throw error;
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = UsersService;
