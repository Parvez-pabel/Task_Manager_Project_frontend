import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
  IsPassword,
} from "../../helper/FormHelper";
import { RegistrationRequest } from "../../APIRequest/ApiRequest";

const RegistrationForm = () => {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate(); // Use React Router for navigation

  const onRegistration = (event) => {
    event.preventDefault(); // Prevent default form submission

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
      RegistrationRequest(email, firstName, lastName, mobile, password).then(
        (result) => {
          if (result === true) {
            navigate("/login"); // Use navigate instead of window.location
          } else {
            ErrorToast("Registration failed. Please try again.");
          }
        }
      );
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
              <form onSubmit={onRegistration}>
                <div className="mb-3">
                  <input
                    ref={emailRef}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={firstNameRef}
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    autoComplete="given-name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={lastNameRef}
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    autoComplete="family-name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={mobileRef}
                    name="mobile"
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                    autoComplete="tel"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={passwordRef}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success w-100 text-nowrap"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* Redirect to login page */}
              <div className="mt-2 text-center">
                <Link
                  to="/login"
                  className="link-underline link-underline-opacity-0"
                >
                  Sign In
                </Link>
                <br />
                <Link
                  to="/ForgetPassword"
                  className="link-underline link-underline-opacity-0"
                >
                  Forgot Password?
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
