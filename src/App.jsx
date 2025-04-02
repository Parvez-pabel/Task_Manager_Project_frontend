import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import NewPage from "./pages/NewPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotfoundPage from "./pages/NotfoundPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import { Toaster } from "react-hot-toast";
import { getToken } from "./helper/sessionHelper";
import SendOTPPage from "./pages/AccountRecoverPage/SendOTPPage";
import VerifyOTPPage from "./pages/AccountRecoverPage/VerifyOTPPage";
import CreatePassPage from "./pages/AccountRecoverPage/CreatePassPage";
const App = () => {
  if (getToken()) {
    return (
      <Fragment>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/Progress" element={<ProgressPage />} />
            <Route path="/Completed" element={<CompletedPage />} />
            <Route path="/Canceled" element={<CanceledPage />} />
            <Route path="/New" element={<NewPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/Login"} replace />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/service" element={<ServicePage />} />

            {/* Account Recovery */}
            <Route path="/sendOtp" element={<SendOTPPage />} />
            <Route path="/verifyOTP" element={<VerifyOTPPage />} />
            <Route path="/createPassword" element={<CreatePassPage />} />
            {/* End Account Recovery */}

            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
};

export default App;
