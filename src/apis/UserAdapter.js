export default class UserAdapter {
  static getToken() {
    return localStorage.getItem("token");
  }
}
