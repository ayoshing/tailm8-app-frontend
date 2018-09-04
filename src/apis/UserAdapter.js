export default class UserAdapter {
  static getToken() {
    return localStorage.jwt;
  }

  static clearToken() {
    return localStorage.removeItem("jwt");
  }

  static isLoggedIn() {
    return !!UserAdapter.getToken();
  }
}
