import { NextFunction, Request, Response } from "express";
import UserService from "../services/users";

class UserController {
  static signup(req: Request, res: Response, next: NextFunction) {
    try {
      UserService.create(req.body);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
