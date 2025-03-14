import React, { lazy, Suspense } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";

import LazyLoader from "./../components/MasterLayout/LazyLoader";
const Dashboard = lazy(() => import("./../components/Dashboard/Dashboard"));
const DashboardPage = (props) => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Dashboard />
        </Suspense>
      </MasterLayout>
      {props.children}
    </div>
  );
};

export default DashboardPage;
