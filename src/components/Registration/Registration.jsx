import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
  IsPassword,
} from "../../helper/FormHelper";
import { RegistrationRequest } from "../../APIRequest/ApiRequest";

const RegistrationForm = () => {
  let emailRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let mobileRef = useRef();
  let passwordRef = useRef();

  const onRegistration = (event) => {
    event.preventDefault(); // Prevent page refresh

    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const mobile = mobileRef.current.value;
    const password = passwordRef.current.value;

    if (!IsEmail(email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(firstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile Required");
    } else if (!IsPassword(password)) {
      ErrorToast("Password Required");
    } else {
      RegistrationRequest(
        email,
        firstName,
        lastName,
        mobile,
        password,
        ""
      ).then((result) => {
        if (result === true) {
          // Registration successful, redirect to login page
          window.location.href = "";
        } else {
          // Registration failed, display error message
          ErrorToast("Registration failed. Please try again.");
        }
      });
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div
            className="card p-4 shadow border-0 rounded-4 mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/143/128/non_2x/register-now-icon-in-comic-style-registration-cartoon-illustration-on-isolated-background-member-notification-splash-effect-sign-business-concept-vector.jpg"
              className="card-img-top w-50 mx-auto d-block"
              alt="Register Now"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Registration</h5>
              <form>
                <div className="mb-3">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={firstNameRef}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={lastNameRef}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={mobileRef}
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={onRegistration}
                    type="submit"
                    className="btn btn-success w-100 text-nowrap"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* Redirect to login page */}
              <div className="mt-2">
                <Link
                  to="/login"
                  className="link-underline link-underline-opacity-0"
                >
                  SignIn
                </Link>
                <br />
                <Link
                  to="/ForgetPassword"
                  className="link-underline link-underline-opacity-0"
                >
                  Forget Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
