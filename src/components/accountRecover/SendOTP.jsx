import React, { useRef } from "react";
import { ErrorToast, IsEmail } from "../../helper/FormHelper";
import { RecoverVerifyEmailRequest } from "../../APIRequest/ApiRequest";


const SendOTP = () => {
  let emailRef = useRef();
  const verifyEmail = (event) => { 
    event.preventDefault();
    let email = emailRef.value;

    if (!IsEmail(email)) {
      ErrorToast("Valid Email Address Required");
      
    } else {
      RecoverVerifyEmailRequest(email).then((result) => {
        if (result === true) {
          window.location.href = "/verify-otp";
        } else {
          ErrorToast("Failed to send OTP. Please try again later.");
        }
      })
      
    }

  }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div
            className="card p-4 shadow border-0 rounded-4 mx-auto "
            style={{ maxWidth: "500px", background: "#FBFBFB" }} // Limit form width on large screens
          >
            <img
              src="https://cdn.dribbble.com/userupload/24852297/file/original-9a0a8743322d61bf25a738e7a51c73a5.gif"
              className="card-img-top w-50 mx-auto d-block"
              alt="Register Now"
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-3">Send OTP</h5>
              <form>
                <div className="mb-3">
                  <input
                      ref={(input) => (emailRef = input)}
                    type="email"
                    className="form-control "
                    placeholder="Enter your email"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={
                      verifyEmail
                    }
                    type="submit"
                    className="btn btn-success w-100 text-nowrap"
                  >
                    Send
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

export default SendOTP;
