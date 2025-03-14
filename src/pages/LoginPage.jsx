import React from "react";

import { Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import BasicComponent from "../components/MasterLayout/BasicComponent";

const Login = lazy(() => import("./../components/Login/Login"));
const LoginPage = () => {
  return (
    <>
      <BasicComponent>
        <Suspense fallback={<LazyLoader />}>
          <Login />
        </Suspense>
      </BasicComponent>
    </>
  );
};

export default LoginPage;
