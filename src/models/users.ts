import { readFile, writeFile } from "jsonfile";
import { User } from "../utils/types";

class UsersModel {
  static async read() {
    try {
      return await readFile("./src/database/users.json");
    } catch (error) {
      throw error;
    }
  }

  static async write(data) {
    try {
      await writeFile("./src/database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
