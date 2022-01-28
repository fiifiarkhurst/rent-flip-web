import Cookies from "js-cookie";
import { USER_TOKEN_IDENTIFIER } from "../constants/constants";

export const BASE_URL = process.env.REACT_APP_BASEURL + "/api/v1";

class Auth {
  getCipher(): string | undefined {
    return Cookies.get(USER_TOKEN_IDENTIFIER);
  }

  setCipher(token: string): void {
    Cookies.set(USER_TOKEN_IDENTIFIER, token, { expires: 1 }); // expire 24 hours
  }

  clearCipher(): void {
    Cookies.remove(USER_TOKEN_IDENTIFIER);
  }
}

export default new Auth();
