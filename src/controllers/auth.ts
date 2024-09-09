import AuthService from "../services/auth";

import { NextFunction, Request, Response } from "express";

class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.signup(req.body);
      res.status(201).json({
        message: "Usuario registrado correctamente",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.login(req.body);
      res.status(200).json({ message: "Logueo correcto", token: token });
    } catch (error) {
      next(error);
    }
  }
  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      await AuthService.logout(req.query.token);
      res.status(200).json({ message: "token eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
