"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../models/auth"));
async function checkToken(req, res, next) {
    const token = req.query.token;
    if (!token)
        return res.status(400).json({ message: "El token es obligatorio" });
    const authDb = await auth_1.default.read();
    const authUser = authDb.auth.find((el) => el.token == token);
    if (!authUser)
        return res.status(401).json({ message: "Token Invalido" });
    next();
}
exports.default = checkToken;
