import { Router } from "express";
import AuthController from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signup", AuthController.signup);

authRouter.post("/login", AuthController.login);

authRouter.post("/logout", AuthController.logout);

export default authRouter;
