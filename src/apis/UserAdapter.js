export default class UserAdapter {
  static getToken() {
    return localStorage.jwt;
  }
}
