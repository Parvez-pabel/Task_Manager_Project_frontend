import React, { Suspense } from 'react';
import BasicComponent from '../../components/MasterLayout/BasicComponent';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import CreatePass from '../../components/accountRecover/CreatePass';

const CreatePassPage = () => {
    return (
      <div>
        <BasicComponent>
          <Suspense fallback={<LazyLoader />}>
            <CreatePass/>
          </Suspense>
        </BasicComponent>
      </div>
    );
};

export default CreatePassPage;