import { readFileSync, writeFileSync } from "jsonfile";

class UserModel {
  static read() {
    try {
      return readFileSync("./src/database/users.json");
    } catch (error) {
      throw error;
    }
  }

  static write(user) {
    try {
      writeFileSync("./src/database/users.json", user);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
