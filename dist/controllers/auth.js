"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../services/auth"));
class AuthController {
    static async signup(req, res, next) {
        try {
            const token = await auth_1.default.signup(req.body);
            res.status(201).json({
                message: "Usuario registrado correctamente",
                token: token,
            });
        }
        catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const token = await auth_1.default.login(req.body);
            res.status(200).json({ message: "Logueo correcto", token: token });
        }
        catch (error) {
            next(error);
        }
    }
    static async logout(req, res, next) { }
}
exports.default = AuthController;
