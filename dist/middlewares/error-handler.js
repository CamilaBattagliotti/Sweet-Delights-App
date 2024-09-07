"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, req, res, next) {
    const { statusCode, message } = error;
    res.status(statusCode || 500).json({ message });
}
exports.default = errorHandler;
