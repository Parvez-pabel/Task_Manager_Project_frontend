import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";
import { LoginRequest } from "../../APIRequest/ApiRequest";

const Login = () => {
  let passRef,
    emailRef = useRef();

  const SubmitLogin = (event) => {
    event.preventDefault();

    let email = emailRef.value;
    let pass = passRef.value;

    if (!IsEmail(email)) {
      ErrorToast("Invalid Email Address");
    } else if (IsEmpty(pass)) {
      ErrorToast("Password Required");
    } else {
      LoginRequest(email, pass).then((result) => {
        if (result === true) {
          // Login successful, redirect to dashboard page thorough href
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div
              className="card p-4 shadow border-0 rounded-4 mx-auto"
              style={{ maxWidth: "400px" }} // Limit form width on large screens
            >
              <img
                src="https://img.freepik.com/free-vector/login-concept-illustration_114360-4525.jpg?semt=ais_hybrid"
                className="card-img-top w-50 mx-auto d-block"
                alt="Register Now"
              />
              <div className="card-body">
                <h5 className="card-title text-center mb-3">SignIn</h5>
                <form>
                  <div className="mb-3">
                    <input
                      ref={(input) => (emailRef = input)}
                      type="email"
                      className="form-control "
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      ref={(input) => (passRef = input)}
                      type="password"
                      className="form-control "
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={SubmitLogin}
                      type="submit"
                      className="btn btn-success w-100 text-nowrap"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="mt-2 ">
                  {" "}
                  <Link
                    to="/registration"
                    className="link-underline link-underline-opacity-0"
                  >
                    SignUp
                  </Link>
                  <br />
                  <Link
                    to="/sendOtp"
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
    </>
  );
};

export default Login;
