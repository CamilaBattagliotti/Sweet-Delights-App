"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function createHash(data) {
    const hash = crypto_1.default.createHash("sha256");
    return hash.update(data).digest("hex");
}
exports.default = createHash;
