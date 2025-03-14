import axios from "axios";
import formHelper from "../helper/FormHelper";

const BaseURI = "https://task-manager-project-pearl.vercel.app/api/v1";

export function registrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  let URL = `${BaseURI}/registration`;

  let PostBody = { email, firstName, lastName, mobile, password, photo }; // ✅ Cleaner syntax

  return axios
    .post(URL, PostBody)
    .then((res) => {
      if (res.status === 200) {
        const responseData = res.data;

        if (responseData?.status === "fail") {
          if (responseData?.data?.keyPattern?.email === 1) {
            formHelper.ErrorToast("Email already exists");
          } else {
            formHelper.ErrorToast("Registration failed. Please try again.");
          }
          return false;
        }
        formHelper.ErrorToast("Unexpected response. Please try again.");
        return false;
      }

      formHelper.SuccessToast("Registration successful!");
      return true;
    })
    .catch((err) => {
      formHelper.ErrorToast("Network error or server issue.");
      console.error("Registration Error:", err);
    });
}
