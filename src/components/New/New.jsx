import React from "react";

const New = () => {
  return (
    <>
      <div className="container-fluid ">
        <h1 className="text-center m-5">New Task</h1>

        {/* Row for better responsiveness */}
        <div className="row justify-content-center ">
          <div className="p-lg-2 col-lg-3 col-md-4 col-sm-12 col-12 p-2">
            <div
              className="card text-black shadow border-0 rounded-4 mb-3 "
              style={{ maxWidth: "500px" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">task title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet</p>
              </div>
              <div className="ms-3 mb-3 fw-bold " style={{ color: "#7886C7" }}>
                New
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
