import React, { useRef } from "react";
import "./create.css";
import { ErrorToast, IsEmpty, SuccessToast } from "../../helper/FormHelper";
import { CreateTaskRequest } from "../../APIRequest/ApiRequest";

const Create = () => {
  let titleRef = useRef();
  let descriptionRef = useRef();

  const createTask = (event) => {
    event.preventDefault();
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;

    if (IsEmpty(title)) {
      ErrorToast("Title Required!");
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required!");
    } else {
      CreateTaskRequest(title, description).then((result) => {
        console.log(result);
        if (result===true) {
          SuccessToast("Task Created Successfully!");
          window.location.href = "/All"; // Redirect to dashboard after creating task
        } else {
          ErrorToast("Failed to Create Task!");
        }
      });
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-6 col-md-8 col-sm-10">
          <div className="card p-lg-4 p-1 shadow rounded-5 border-0">
            <div className="card-body">
              <h1 className="text-center">Create a New Task</h1>
              <br />
              <input
                ref={titleRef}
                type="text"
                name="text"
                placeholder="Task Heading"
                className="form-control"
              />
              <br />
              <textarea
                ref={descriptionRef}
                rows={5}
                placeholder="Task Description"
                className="form-control"
              />
              <br />
              <div className="d-flex justify-content-end w-100">
                <button
                  onClick={createTask}
                  className="btn btn-warning fw-bold w-sm-100 w-md-75"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
