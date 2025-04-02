import React, { Suspense } from 'react';
import BasicComponent from '../../components/MasterLayout/BasicComponent';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import SendOTP from '../../components/accountRecover/SendOTP';

const SendOTPPage = () => {
    return (
      <div>
        <BasicComponent>
          <Suspense fallback={<LazyLoader />}>
            <SendOTP/>
          </Suspense>
        </BasicComponent>
      </div>
    );
};

export default SendOTPPage;