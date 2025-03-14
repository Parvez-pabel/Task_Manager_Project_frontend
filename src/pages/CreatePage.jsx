import React, { Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "./../components/MasterLayout/LazyLoader";

// This component will be lazy loaded when the route is accessed
const Create = lazy(() => import("./../components/Create/Create"));

const CreatePage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default CreatePage;
