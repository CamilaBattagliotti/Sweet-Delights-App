import { NextFunction, Request, Response } from "express";
import UserService from "../services/users";

class UserController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      await UserService.create(req.body);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.getById(req.params.id);
      res.status(200).json({ user: user });
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.updateById(req.params.id, req.body);
      res.status(200).json({ message: "Cambios agregados exitosamente", user });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
