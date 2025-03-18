import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-Slice/SattingSlice";
import { setToken, setUserDetails } from "../helper/sessionHelper";

const BaseUrl = "https://task-manager-project-pearl.vercel.app/api/v1";

// Registration API request
export async function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(ShowLoader()); // Show loader at start
  try {
    const URL = `${BaseUrl}/registration`;
    const PostBody = { email, firstName, lastName, mobile, password, photo };
    const header = {
      headers: { "Content-Type": "application/json" },
    };
    // Make the API request
    const response = await axios.post(URL, PostBody,header);

    // Check for successful response
    if (response.status === 200) {
      SuccessToast("Registration Successful");
      return true;
    } else {
      ErrorToast("Registration failed. Please try again.");
      return false;
    }
  } catch (error) {
    console.error("Registration Error:", error);

    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.message || "Unexpected error occurred";

      if (status === 400) {
        if (errorMessage.includes("Email already in use")) {
          ErrorToast("Email already exists");
        } else {
          ErrorToast(errorMessage);
        }
      } else {
        ErrorToast(errorMessage);
      }
    } else {
      // Network or server issues
      ErrorToast("Server Error. Please check your internet connection.");
    }

    return false;
  } finally {
    store.dispatch(HideLoader()); // Always hide loader
  }
}
// login API request

export async function LoginRequest(email, password) {
  
  store.dispatch(ShowLoader());
  
  // Show loader at start
  try {
    
    const URL = `${BaseUrl}/login`;
    const PostBody = { email: email, password: password };

    // Make the API request
    const { data, status } = await axios.post(URL, PostBody);

    // Ensure success response
    if (status === 200 && data.token && data.user) {
      setToken(data.token);
      setUserDetails(data.user);
      SuccessToast("Login Successful");
      // Redirect to dashboard
      
      return true;
    }
  } catch (error) {
    console.error("Login Error:", error);

    if (error.response) {
      const errorMessage =
        error.response.data?.message || "Invalid credentials";
      ErrorToast(errorMessage);
    } else {
      ErrorToast("Server Error. Please check your internet connection.");
    }
  } finally {
    store.dispatch(HideLoader()); // Always hide loader
  }
  return false;
}
