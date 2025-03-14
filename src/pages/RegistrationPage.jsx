import React from "react";

import { Suspense, lazy } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import BasicComponent from "../components/MasterLayout/BasicComponent";

const Registration = lazy(() =>
  import("./../components/Registration/Registration")
);

const RegistrationPage = () => {
  return (
    <>
      <BasicComponent>
        <Suspense fallback={<LazyLoader />}>
          <Registration />
        </Suspense>
      </BasicComponent>
    </>
  );
};

export default RegistrationPage;
