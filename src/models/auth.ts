import { writeFileSync, readFileSync } from "jsonfile";
import { AuthUser } from "../utils/types";
class AuthModel {
  static read() {
    try {
      const db = readFileSync("./src/database/auth.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
  static write(data: AuthUser) {
    try {
      writeFileSync("./src/database/auth.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;
