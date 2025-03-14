import React from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import { Suspense, lazy } from "react";

import LazyLoader from "../components/MasterLayout/LazyLoader";
const Notfound = lazy(() => import("./../components/Notfound/Notfound"));

const NotfoundPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Notfound />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default NotfoundPage;
