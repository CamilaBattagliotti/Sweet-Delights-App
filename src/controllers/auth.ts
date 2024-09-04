import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

class AuthController {
  static signup(req: Request, res: Response, next: NextFunction) {
    try {
      const token = AuthService.signup(req.body);
      res.status(201).json({
        message: "Usuario registrado correctamente",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
  static login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = AuthService.login(req.body);
      res.status(200).json({ message: "Logueo correcto", token: token });
    } catch (error) {
      next(error);
    }
  }
  static logout(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
