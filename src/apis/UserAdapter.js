const API_PROFILE_URL = "http://localhost:3001/api/profile";

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

  static getUserProfile(userId) {
    return fetch(`${API_PROFILE_URL}/users/${userId}`).then(res => res.json());
  }
}
