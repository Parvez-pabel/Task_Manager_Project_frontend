import React from "react";
import "./create.css";

const Create = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-sm-10">
            {" "}
            {/* Adjust width dynamically */}
            <div className="card p-lg-4 p-1 shadow rounded-5 border-0">
              <div className="card-body">
                <h1 className="text-center">Create a new Task</h1>
                <br />
                <input
                  type="text"
                  name="text"
                  placeholder="Task Heading"
                  className="form-control"
                />
                <br />
                <textarea
                  rows={5}
                  placeholder="Task Description"
                  className="form-control"
                />
                <br />
                <div className="d-flex justify-content-end w-100">
                  <button className="btn btn-warning fw-bold w-sm-100 w-md-75">
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
