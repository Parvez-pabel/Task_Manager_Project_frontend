import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-Slice/SattingSlice";
import { getToken, setToken, setUserDetails } from "../helper/sessionHelper";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../redux/state-Slice/TaskSlice";
import { setSummary } from "../redux/state-Slice/SummerySlice";

const BaseUrl = "https://task-manager-project-pearl.vercel.app/api/v1";

let header = {
  headers: {
    token: getToken(), // Correct token format
    // Ensure email is sent if required
  },
};

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
    const response = await axios.post(URL, PostBody, header);

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
    store.dispatch(HideLoader());
    // Always hide loader
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

//create task api request

export async function CreateTaskRequest(title, description) {
  store.dispatch(ShowLoader()); // Show loader at start

  let URL = BaseUrl + "/createTask";
  const PostBody = { title, description, status: "New" };

  try {
    const res = await axios.post(URL, PostBody, header);
    store.dispatch(HideLoader());

    if (res.status === 200) {
      SuccessToast("Task created successfully");
      return true;
    } else {
      ErrorToast("Failed to create task. Please try again.");
      return false;
    }
  } catch (err) {
    console.error("Create Task Error:", err);
    store.dispatch(HideLoader());
    ErrorToast("Server Error. Please check your internet connection.");
    return false;
  }
}

// get all tasks list api request by status

export function GetTasksByStatusRequest(status) {
  store.dispatch(ShowLoader()); // Show loader at start

  let URL = `${BaseUrl}/getTaskByStatus/${status}`;
  return axios
    .get(URL, header)
    .then((res) => {
      store.dispatch(HideLoader());

      if (res.status === 200) {
        if (status === "New") {
          store.dispatch(SetNewTask(res.data.tasks));
        } else if (status === "Completed") {
          store.dispatch(SetCompletedTask(res.data.tasks));
        } else if (status === "Canceled") {
          store.dispatch(SetCanceledTask(res.data.tasks));
        } else if (status === "InProgress") {
          store.dispatch(SetProgressTask(res.data.tasks));
        }
      } else {
        ErrorToast("Failed to fetch tasks. Please try again.");
      }
    })
    .catch((err) => {
      console.error("Get Tasks Error:", err);
      store.dispatch(HideLoader());
      ErrorToast("Server Error. Please check your internet connection.");
    });
}

// Summary
export async function SummaryRequest() {
  store.dispatch(ShowLoader()); // Show loader at start
  let URL = `${BaseUrl}/countTasksByStatus`;

  try {
    const res = await axios.get(URL, header);
    store.dispatch(HideLoader());

    if (res?.status === 200) {
      store.dispatch(ShowLoader());
      store.dispatch(setSummary(res.data));
      // Debugging
    } else {
      ErrorToast("Failed to fetch summary. Please try again.");
    }
  } catch (err) {
    console.error("Summary Error:", err);
    store.dispatch(HideLoader());
    ErrorToast("Server Error. Please check your internet connection.");
  }
}

//delete task

export function DeleteRequest(id) {
  store.dispatch(ShowLoader()); // Show loader at start
  let URL = `${BaseUrl}/deleteTask/${id}`;
  return axios
    .delete(URL, header)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Task deleted successfully");
        return true;
      } else {
        ErrorToast("Failed to delete task. Please try again.");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
