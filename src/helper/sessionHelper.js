class sessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setUserDetails(userDetails) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("userDetails"));
  }
  logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
}

export const { setToken, getToken, setUserDetails, getUserDetails, logout } =
  new sessionHelper();

//logout or remove session
