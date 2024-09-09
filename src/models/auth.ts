import { writeFile, readFile } from "jsonfile";

import { AuthUser } from "../utils/types";
class AuthModel {
  static async read() {
    try {
      const db = await readFile("./src/database/auth.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
  static async write(data: AuthUser) {
    try {
      await writeFile("./src/database/auth.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;
