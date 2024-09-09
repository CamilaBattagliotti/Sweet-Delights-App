import AuthModel from "../models/auth";

import { NextFunction, Request, Response } from "express";

async function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.query.token;

  if (!token)
    return res.status(400).json({ message: "El token es obligatorio" });

  const authDb = await AuthModel.read();
  const authUser = authDb.auth.find((el) => el.token == token);

  if (!authUser) return res.status(401).json({ message: "Token Invalido" });

  next();
}

export default checkToken;
