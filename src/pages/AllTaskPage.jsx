import React, { Suspense } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Alltask from "../components/allTask/Alltask";

const AllTaskPage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Alltask />
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default AllTaskPage;
