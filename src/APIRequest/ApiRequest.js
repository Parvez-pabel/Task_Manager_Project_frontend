import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";

const BaseUrl = "https://task-manager-project-pearl.vercel.app/api/v1";
//registration api call with axios
export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  let URL = BaseUrl + "/registration";
  let PostBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  return axios
    .post(URL, PostBody)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === "fail") {
          if (res.data.data.keyPattern.email === 1) {
            ErrorToast("Email already exists");
            return false;
          } else {
            ErrorToast("Unexpected error occurred. Please try again.");
            return false;
          }
        } else {
          SuccessToast("Registration Successful");
          return true; // return true if registration is successful  else return false
        }
      } else {
        ErrorToast("Registration failed. Please try again.");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Server Error");
      console.error(error);
      // Handle error here
    });
}
