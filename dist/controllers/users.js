"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../services/users"));
class UserController {
    static async signup(req, res, next) {
        try {
            await users_1.default.create(req.body);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = UserController;
