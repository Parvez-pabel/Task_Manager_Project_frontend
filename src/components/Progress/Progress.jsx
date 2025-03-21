import { GetTasksByStatusRequest } from "../../APIRequest/ApiRequest";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { DeleteTask } from "../../helper/deleteAlert";

const Progress = () => {
  useEffect(() => {
    GetTasksByStatusRequest("InProgress");
  }, []);

  const InProgress = useSelector((state) => state.tasks?.InProgress || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const InProgressArray = Object.values(InProgress);
  const handleCardClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };
  const DeleteItem = (id) => {
    DeleteTask(id).then((result) => {
      if (result === true) {
        GetTasksByStatusRequest("InProgress");
      }
    });
  };
  return (
    <div className="container-fluid ">
      <h1 className="text-center m-5 ">InProgress Task</h1>
      <hr className="w-25 mx-auto" />

      {/* Row for better responsiveness */}
      {InProgressArray.length > 0 ? (
        <div className="p-5 row justify-content-center">
          {InProgressArray.map((item, i) => (
            <div
              key={i.toString()}
              className="p-lg-2 col-lg-3 col-md-4 col-sm-12 col-12 p-2"
            >
              <div className="shadow border-0 rounded-4 mb-3">
                <div
                  className=" card text-black border-0"
                  style={{ maxWidth: "500px", cursor: "pointer" }}
                  onClick={() => handleCardClick(item)}
                >
                  <div className="card-body ">
                    <h5 className="card-title">{item.title}</h5>
                    <hr />
                    <p
                      style={{
                        height: "100px",
                        overflowY: "auto",
                      }}
                      className="card-text"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className=" m-3 d-flex gap-3 justify-content-end align-items-center">
                  <i
                    className="bi bi-calendar3-week-fill"
                    style={{ color: "#7886C7" }}
                  >
                    <span className="ms-2">{item.createdAt}</span>
                  </i>
                  <button className="btn p-0">
                    <i
                      className="bi bi-pencil-square"
                      style={{ color: "#7886C7" }}
                    ></i>
                  </button>
                  <button
                    onClick={DeleteItem.bind(this, item._id)}
                    className="btn p-0"
                  >
                    <i
                      className="bi bi-trash3-fill"
                      style={{ color: "#7886C7" }}
                    ></i>
                  </button>
                  <div>
                    <h6 className="fw-bold" style={{ color: "#EF9651" }}>
                      <span className="">{item.status}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Please wait.........</p>
      )}
      {/* Modal to show task details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTask?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <p>
            <strong>Description:</strong> {selectedTask?.description}
          </p>
          <p>
            <strong>Date:</strong> {selectedTask?.createdAt}
          </p>
          <p>
            <strong>Status:</strong> {selectedTask?.status}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Progress;
