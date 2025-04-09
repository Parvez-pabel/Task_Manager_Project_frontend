import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { ErrorToast } from "../../helper/FormHelper";
import { RecoverVerifyOTPRequest } from "../../APIRequest/ApiRequest";
import { getEmail } from "../../helper/sessionHelper";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(""); // OTP State
  const handleOtpChange = (newValue) => {
    setOtp(newValue); // State Update
    alert(newValue); // Directly show updated value
  };

  const submitOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      RecoverVerifyOTPRequest(getEmail(), otp).then((res) => {
        if (res.status === true) {
          window.location.href = "/createPassword";
        } else {
          ErrorToast("Invalid OTP. Please try again.");
        }
      });
    } else {
      ErrorToast("Enter 6 digit OTP");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div
            className="card p-4 shadow border-0 rounded-4 mx-auto"
            style={{ maxWidth: "500px", background: "#FBFBFB" }}
          >
            {/* Animated Image */}
            <img
              src="https://cdn.dribbble.com/userupload/24852297/file/original-9a0a8743322d61bf25a738e7a51c73a5.gif"
              className="card-img-top mx-auto d-block"
              alt="Verify OTP"
              style={{ maxWidth: "80px" }}
            />

            <div className="card-body">
              <h5 className="card-title text-center mb-3">Verify your OTP</h5>
              <p className="text-center text-muted">
                Enter the 6-digit OTP sent to your email.
              </p>

              <form >
                <div className="mb-3 text-center">
                  <MuiOtpInput
                    length={6}
                    value={otp} // Ensure value is set
                    onChange={handleOtpChange} // Handle OTP input change
                    sx={{
                      "& input": {
                        width: "50px",
                        height: "50px",
                        textAlign: "center",
                        fontSize: "1.5rem",
                        borderRadius: "8px",

                        outline: "none",
                        margin: "0 5px", // Spacing between boxes
                      },

                      // Responsive styles
                      "@media (max-width: 768px)": {
                        "& input": {
                          width: "40px",
                          height: "40px",
                          fontSize: "1.2rem",
                        },
                      },

                      "@media (max-width: 480px)": {
                        "& input": {
                          width: "35px",
                          height: "35px",
                          fontSize: "1rem",
                        },
                      },
                    }}
                  />
                </div>
                {/* Submit Button */}
                <div className="d-grid mt-3">
                  <button
                    onClick={submitOTP}
                    type="submit"
                    className="btn btn-success btn-lg"
                  >
                    Verify OTP
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

export default VerifyOTP;
