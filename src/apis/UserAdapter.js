export default class UserAdapter {
  static getToken() {
    return localStorage.jwt;
  }

  static clearToken() {
    return localStorage.removeItem("jwt");
  }

  // can replace this by checking redux store for isAuthenticated
  static isLoggedIn() {
    return !!UserAdapter.getToken();
  }
}
