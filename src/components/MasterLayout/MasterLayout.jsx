import React, { useState } from "react";
import { Offcanvas, Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MasterLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className={`main-container ${showSidebar ? "sidebar-open" : ""}`}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          {/* Sidebar Toggle Button */}
          <div>
            <Button
              variant=""
              className="pe-2 btn-custom"
              onClick={toggleSidebar}
            >
              <i className="bi bi-sliders me-2 text-danger"></i>
            </Button>
          </div>

          {/* App Title */}
          <div>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              Task Manager
            </NavLink>
          </div>

          {/* Profile Dropdown */}
          <div>
            <Dropdown>
              <Dropdown.Toggle as="button" className="btn border-0 p-0">
                <img
                  alt="Profile"
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-light shadow rounded-3 p-2 fs-5">
                <Dropdown.Item as={NavLink} to="/Profile">
                  <i className="bi bi-person-circle me-2"></i> Profile
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Login">
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="m-3 d-flex flex-column gap-4 list-unstyled rounded-3 p-2 fs-5">
            <NavLink className="nav-link" to="/">
              <i class="bi bi-house-door-fill me-3"></i> Dashboard
            </NavLink>
            <NavLink className="nav-link" to="/create">
              <i className="bi bi-plus-lg me-3"></i> Add New Task
            </NavLink>
            <NavLink className="nav-link" to="/All">
              <i className="bi bi-list-task me-3"></i> All Tasks
            </NavLink>
            <NavLink className="nav-link" to="/Progress">
              <i className="bi bi-hourglass-split me-3"></i> In Progress Tasks
            </NavLink>
            <NavLink className="nav-link" to="/New">
              <i class="bi bi-journal-plus me-3"></i> New Task
            </NavLink>
            <NavLink className="nav-link" to="/Completed">
              <i className="bi bi-check-circle me-3"></i> Completed Tasks
            </NavLink>
            <NavLink className="nav-link" to="/Canceled">
              <i className="bi bi-x-lg me-3"></i> Canceled Tasks
            </NavLink>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="content">{props.children}</div>
      <footer>
        <div className="text-center py-3 fixed-bottom bg-light">
          Copyright © 2023 ParvezAlom@pabel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MasterLayout;
