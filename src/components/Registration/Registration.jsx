import React from "react";

import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div
            className="card p-4 shadow border-0 rounded-4 mx-auto"
            style={{ maxWidth: "400px" }} // Limit form width on large screens
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
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
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
              <div className="mt-2 ">
                {" "}
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
