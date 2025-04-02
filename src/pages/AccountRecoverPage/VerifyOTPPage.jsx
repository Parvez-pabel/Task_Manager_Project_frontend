import React, { Suspense } from "react";
import BasicComponent from "../../components/MasterLayout/BasicComponent";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import VerifyOTP from "../../components/accountRecover/VerifyOTP";

const VerifyOTPPage = () => {
  return (
    <div>
      <BasicComponent>
        <Suspense fallback={<LazyLoader />}>
          <VerifyOTP />
        </Suspense>
      </BasicComponent>
    </div>
  );
};

export default VerifyOTPPage;
