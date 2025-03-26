import React, { useEffect } from "react";
import "../Dashboard/dashboard.css";
import { useSelector } from "react-redux";
import { SummaryRequest } from "../../APIRequest/ApiRequest";

const Dashboard = () => {
  useEffect(() => {
    SummaryRequest();
  }, []);

  const SummaryTask = useSelector((state) => state.summaryReducer?.value || []);

  return (
    <>
      <h1 className="text-center mt-3">Dashboard</h1>
      <hr className="w-75 mx-auto" />

      <div className="container-fluid">
        <div className="row justify-content-center gap-2">
          <div className="col-md-3">
            <div className="card bg-secondary border-0 shadow-sm text-white">
              <div className="card-body text-center fs-4 fw-bold">
                <h5 className="text-white fw-bold">Total Tasks</h5>
                <p className="card-text text-white">
                  {SummaryTask?.totalTasks}
                </p>
              </div>
            </div>
          </div>

          {SummaryTask?.tasksByStatus?.map((Item, i) => {
            const getStatusColor = (status) => {
              switch (status) {
                case "New":
                  return "bg-blue-500 text-black";
                case "InProgress":
                  return "bg-purple-500 text-black";
                case "Canceled":
                  return "bg-orange-500 text-black";
                case "Completed":
                  return "bg-green-500 text-black";
                default:
                  return "bg-gray-500 text-black";
              }
            };

            return (
              <div key={i} className="col-md-3">
                <div
                  className={`text-center card border-0 shadow-sm ${getStatusColor(
                    Item._id
                  )}`}
                >
                  <div className={`card-body fs-4 fw-bold text-center}`}>
                    <h5 className="text-white fw-bold">{Item._id}</h5>
                    <p className="card-text text-white">{Item.sum}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
