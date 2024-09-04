import { NextFunction, Request, Response } from "express";
import AuthModel from "../models/auth";

function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.query.token;

  if (!token)
    return res.status(400).json({ message: "El token es obligatorio" });

  const authDb = AuthModel.read();
  const user = authDb.auth.find((el) => el.token == token);

  if (!user) return res.status(401).json({ message: "Token Invalido" });

  next();
}

export default checkToken;
