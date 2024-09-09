import { Router } from "express";

import AuthController from "../controllers/auth";

import checkToken from "../middlewares/check-token";

const authRouter = Router();

authRouter.post("/signup", AuthController.signup);

authRouter.post("/login", AuthController.login);

authRouter.post("/logout", checkToken, AuthController.logout);

export default authRouter;
