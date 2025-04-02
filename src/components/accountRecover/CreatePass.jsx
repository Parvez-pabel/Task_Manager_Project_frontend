import React, { useRef } from "react";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";

const CreatePass = () => {
  let PasswordRef,
    ConfirmPasswordRef = useRef();
  const ResetPass = (event) => {
    event.preventDefault();
    let password = PasswordRef.value;
    let confirmPassword = ConfirmPasswordRef.value;
    if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else if (confirmPassword) {
      ErrorToast("Password Required");
    } else if (password === confirmPassword) {
      ErrorToast("Password mismatched");
    } else {
    }
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div
            className="card p-4 shadow border-0 rounded-4 mx-auto"
            style={{ maxWidth: "500px" }} // Limit form width on large screens
          >
            <img
              src="https://media.istockphoto.com/id/1500914761/vector/fitness-health-gym-trendy-icons-on-circles.jpg?s=612x612&w=0&k=20&c=MaSBJ-edgZ2Nm7utjZgYupCWAzhrcIek0Udz48L_JME="
              className="card-img-top w-50 mx-auto d-block"
              alt="Register Now"
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-3">
                Create New Password
              </h5>
              <form>
                <div className="mb-3">
                  <input
                    // ref={(input) => (emailRef = input)}
                    type="email"
                    className="form-control "
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    ref={(input) => (PasswordRef = input)}
                    type="password"
                    className="form-control "
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    ref={(input) => (ConfirmPasswordRef = input)}
                    type="password"
                    className="form-control "
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={ResetPass}
                    type="submit"
                    className="btn btn-success w-100 text-nowrap"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePass;
