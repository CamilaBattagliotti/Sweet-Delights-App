import UsersModel from "../models/users";

import { v4 as uuidv4 } from "uuid";

import { User } from "../utils/types";

class UsersService {
  static async read() {
    try {
      return await UsersModel.read();
    } catch (error) {
      throw error;
    }
  }

  static async create(data: User) {
    try {
      const { name, email } = data;
      const db = await this.read();
      const id = uuidv4();

      db.users.push({ id, name, email });

      await UsersModel.write(db);

      return id;
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email: string) {
    try {
      const db = await this.read();
      const user = db.users.find((user) => user.email == email);
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
}

export default UsersService;
