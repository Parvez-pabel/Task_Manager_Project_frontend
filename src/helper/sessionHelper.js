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
  //forget password/recovery password
  setEmail(email) {
    localStorage.setItem("email", email);
  }
  getEmail() {
    return localStorage.getItem("email");
  }
  setOtp(otp) {
    localStorage.setItem("otp", otp);
  }
  getOtp() {
    return localStorage.getItem("otp");
  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  logout,
  setEmail,
  getEmail,
  setOtp,
  getOtp,
} = new sessionHelper();

//logout or remove session
