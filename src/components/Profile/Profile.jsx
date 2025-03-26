import React, { useEffect, useRef } from "react";
import {
  getProfileDetails,
  UpdateProfileRequest,
} from "../../APIRequest/ApiRequest";
import { useSelector } from "react-redux";
import {
  Base64Image,
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
  IsPassword,
  SuccessToast,
} from "../../helper/FormHelper";

const Profile = () => {
  useEffect(() => {
    // getProfileDetails();
    getProfileDetails();
  }, []);
  const ProfileData = useSelector((state) => state.profile.value);

  let emailRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let mobileRef = useRef();
  let passwordRef = useRef();
  let userImgRef = useRef();
  let userImgVwRef = useRef();

  //previewImg

  const previewImg = () => {
    let ImgFile = userImgRef.files[0];
    Base64Image(ImgFile).then((base64Img) => {
      userImgVwRef.src = base64Img;
    });
  };

  // updateProfile

  const updateProfile = (e) => {
    e.preventDefault();
    // Validate form inputs
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo = userImgVwRef.src;

    if (IsEmail(emailRef)) {
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
      UpdateProfileRequest(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          SuccessToast("Profile Updated Successfully");
          window.location.href = "/profile"; // Redirect to dashboard after updating profile
        }
      });
    }
  };

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center gap-2 d-flex flex-row">
          <div className=" col-lg-6 col-md-6 img-fluid d-flex justify-content-center p-3">
            <img
              ref={(input) => (userImgVwRef = input)}
              className="shadow rounded img-fluid"
              src={ProfileData?.photo}
              alt="Profile"
              width={150}
              height={200}
            />
          </div>
          <div className="col-lg-6 col-md-6 d-flex flex-column gap-3 p-5 ">
            <input
              ref={(input) => (emailRef = input)}
              defaultValue={ProfileData?.email}
              className="form-control "
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              readOnly={true}
            />
            <input
              ref={(input) => (firstNameRef = input)}
              defaultValue={ProfileData?.firstName}
              className="form-control border "
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <input
              ref={(input) => (lastNameRef = input)}
              defaultValue={ProfileData?.lastName}
              className="form-control "
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />

            <input
              ref={(input) => (mobileRef = input)}
              defaultValue={ProfileData?.mobile}
              className="form-control "
              type="mobile"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
            />
            <input
              ref={(input) => (passwordRef = input)}
              defaultValue={ProfileData?.password}
              className="form-control "
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <input
              onChange={previewImg}
              ref={(input) => (userImgRef = input)}
              className="form-control "
              type="file"
              name="file"
              id="file"
            />

            {/* Add more details as needed */}
            <div>
              <button onClick={updateProfile} className="btn btn-info ">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
