import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid " style={{ maxWidth: "1200px" }}>
      <h1 className="text-center mt-3">Dashboard</h1>

      {/* Row for better responsiveness */}
      <div className="row justify-content-center ">
        {[
          "Total Tasks",
          "New Task",
          "Completed Tasks",
          "Pending Tasks",
          "In Progress",
          "Canceled Task",
        ].map((title, index) => (
          <div
            key={index}
            className="p-lg-2 col-lg-3 col-md-4 col-sm-12 col-12 p-2"
          >
            <div className="card text-black shadow border-0 rounded-4 mb-3">
              <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title ">0000</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
