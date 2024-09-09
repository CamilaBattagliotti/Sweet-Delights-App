import AuthModel from "../models/auth";

import UsersService from "./users";

import createHash from "../utils/create-hash";

import { v4 as uuidv4 } from "uuid";

import { validateSignup, validateLogin } from "../schemas/auth";

class AuthService {
  static async getUserById(id: string) {
    try {
      const authDb = await AuthModel.read();

      const user = authDb.auth.find((el) => el.userId == id);
      if (!user) {
        const error = new Error(
          "El usuario no existe en nuestra base de datos"
        );
        error["statusCode"] = 404;

        throw error;
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async signup(data: { name: string; email: string; password: string }) {
    try {
      const result = validateSignup(data);
      if (!result.success) {
        const error = new Error("Los datos ingresados son inválidos");
        error["statusCode"] = 400;

        throw error;
      }

      const { name, email, password } = result.data;

      const userDb = await UsersService.read();
      const user = userDb.users.find((user) => user.email == email);
      if (user) {
        const error = new Error("Usuario ya registrado");
        error["statusCode"] = 400;
        throw error;
      }

      const authDb = await await AuthModel.read();
      const userId = await UsersService.create({ name, email });
      const id = uuidv4();
      const rawToken = uuidv4();
      const token = createHash(rawToken);

      authDb.auth.push({ id, userId, password: createHash(password), token });

      await AuthModel.write(authDb);

      return token;
    } catch (error) {
      throw error;
    }
  }
  static async login(data: { email: string; password: string }) {
    try {
      const result = validateLogin(data);
      if (!result.success) {
        const error = new Error("Los datos ingresados son inválidos");
        error["statusCode"] = 400;

        throw error;
      }
      const { email, password } = result.data;

      const user = await UsersService.getByEmail(email);
      const authUser = await this.getUserById(user.id);

      if (authUser.password != createHash(password)) {
        const error = new Error("La Contraseña ingresada es incorrecta");
        error["statusCode"] = 400;
        throw error;
      }

      const authDb = await AuthModel.read();
      const token = createHash(uuidv4());

      const dbAuthModified = authDb.auth.map((el) =>
        el.userId == user.id ? { ...el, token: token } : el
      );

      authDb.auth = dbAuthModified;
      await AuthModel.write(authDb);

      return token;
    } catch (error) {
      throw error;
    }
  }
  static async logout(token) {
    try {
      const authDb = await AuthModel.read();
      const authUser = authDb.auth.find((auth) => auth.token == token);

      if (!authUser) {
        const error = new Error("token no encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      authUser.token = null;

      await AuthModel.write(authDb);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
