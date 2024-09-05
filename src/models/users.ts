import { readFileSync, writeFileSync } from "jsonfile";
import { User } from "../utils/types";

class UsersModel {
  static read() {
    try {
      return readFileSync("./src/database/users.json");
    } catch (error) {
      throw error;
    }
  }

  static write(data: User) {
    try {
      writeFileSync("./src/database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
