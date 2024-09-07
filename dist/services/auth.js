"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../models/auth"));
const users_1 = __importDefault(require("./users"));
const create_hash_1 = __importDefault(require("../utils/create-hash"));
const uuid_1 = require("uuid");
const auth_2 = require("../schemas/auth");
class AuthService {
    static async read() {
        try {
            return await auth_1.default.read();
        }
        catch (error) {
            throw error;
        }
    }
    static async getUserById(id) {
        try {
            const authDb = await this.read();
            const user = authDb.auth.find((el) => el.userId == id);
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
    static async signup(data) {
        try {
            const { name, email, password } = data;
            const result = (0, auth_2.validateSignup)(data);
            if (!result.success) {
                const error = new Error("Los datos ingresados son inválidos");
                error["statusCode"] = 400;
                throw error;
            }
            const authDb = await this.read();
            const userId = await users_1.default.create({ name, email });
            const id = (0, uuid_1.v4)();
            const rawToken = (0, uuid_1.v4)();
            const token = (0, create_hash_1.default)(rawToken);
            authDb.auth.push({ id, userId, password: (0, create_hash_1.default)(password), token });
            await auth_1.default.write(authDb);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
    static async login(data) {
        try {
            const { email, password } = data;
            const result = (0, auth_2.validateLogin)(data);
            if (!result.success) {
                const error = new Error("Los datos ingresados son inválidos");
                error["statusCode"] = 400;
                throw error;
            }
            const user = await users_1.default.getByEmail(email);
            const authUser = await this.getUserById(user.id);
            if (authUser.password != (0, create_hash_1.default)(password)) {
                const error = new Error("La Contraseña ingresada es incorrecta");
                error["statusCode"] = 400;
                throw error;
            }
            return authUser.token;
        }
        catch (error) {
            throw error;
        }
    }
    static async logout() { }
}
exports.default = AuthService;
