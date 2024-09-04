import UsersModel from "../models/users";

import { v4 as uuidv4 } from "uuid";

class UsersService {
  static read() {
    try {
      return UsersModel.read();
    } catch (error) {
      throw error;
    }
  }

  static create(data: { name: string; email: string }) {
    try {
      const { name, email } = data;
      const db = this.read();
      const id = uuidv4();

      db.users.push({ id, name, email });

      UsersModel.write(db);

      return id;
    } catch (error) {
      throw error;
    }
  }

  static getByEmail(email: string) {
    try {
      const db = this.read();
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
