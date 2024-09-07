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
}

export default UserController;
