import { Router } from "express";

import UserController from "../controllers/users";

import checkToken from "../middlewares/check-token";

const usersRouter = Router();

usersRouter.get("/:id", checkToken, UserController.getById);
usersRouter.patch("/:id", checkToken, UserController.updateById);

export default usersRouter;
