import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AllTaskPage from "./pages/AllTaskPage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/All" element={<AllTaskPage />} />
          <Route path="/Progress" element={<ProgressPage />} />
          <Route path="/Completed" element={<CompletedPage />} />
          <Route path="/Canceled" element={<CanceledPage />} />
          <Route path="/New" element={<NewPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* <FullScreenLoader /> */}
    </Fragment>
  );
};

export default App;
