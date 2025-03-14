import React from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import { Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const ForgetPassword = lazy(() =>
  import("./../components/ForgetPassword/ForgetPassword")
);
const ForgetPasswordPage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ForgetPassword />
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default ForgetPasswordPage;
