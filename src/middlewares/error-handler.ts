import { Request, Response } from "express";

function errorHandler(error, req: Request, res: Response, next) {
  const { statusCode, message } = error;
  res.status(statusCode || 500).json({ message });
}

export default errorHandler;
