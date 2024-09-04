import AuthModel from "../models/auth";

import UsersService from "./users";

import createHash from "../utils/create-hash";

import { v4 as uuidv4 } from "uuid";

class AuthService {
  static read() {
    try {
      return AuthModel.read();
    } catch (error) {
      throw error;
    }
  }

  static getUserById(id: string) {
    try {
      const authDb = this.read();
      const user = authDb.auth.find((el) => el.userId == id);
      if (!user) {
        const error = new Error("Usuario no encontrado");
        error["statusCode"] = 404;
        throw error;
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  static signup(data: { name: string; email: string; password: string }) {
    try {
      const { name, email, password } = data;
      const authDb = this.read();
      const userId = UsersService.create({ name, email });
      const id = uuidv4();
      const rawToken = uuidv4();
      const token = createHash(rawToken);

      authDb.auth.push({ id, userId, password: createHash(password), token });
      AuthModel.write(authDb);
      return token;
    } catch (error) {
      throw error;
    }
  }
  static login(data: { email: string; password: string }) {
    try {
      const { email, password } = data;
      const user = UsersService.getByEmail(email);
      const authUser = this.getUserById(user.id);

      if (authUser.password != createHash(password)) {
        const error = new Error("La Contraseña ingresada es incorrecta");
        error["statusCode"] = 400;
        throw error;
      }
      return authUser.token;
    } catch (error) {
      throw error;
    }
  }
  static logout() {}
}

export default AuthService;
